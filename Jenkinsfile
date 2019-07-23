#!/usr/bin/env groovy

def dockerRegistry = "329802642264.dkr.ecr.eu-west-1.amazonaws.com"
def nodeImageVersion = "10.16.0"
def nodeImage = "${dockerRegistry}/bbc-news/node-10-lts:${nodeImageVersion}"

def nodeName
def slackChannel = "#si_repo-psammead"
def stageName = "Unknown"
def gitCommitAuthor = "Unknown"
def gitCommitMessage = "Unknown"

def getCommitInfo = {
  gitCommitAuthor = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' ${GIT_COMMIT}").trim()
  gitCommitMessage = sh(returnStdout: true, script: "git log -1 --pretty=%B").trim()
}

def notifySlack(colour, buildStatus, gitCommitAuthor, stageName, gitCommitMessage, slackChannel) {
  // call the global slackSend method in Jenkins
  slackSend(color: colour, message: "*${buildStatus}* on ${GIT_BRANCH} [build ${BUILD_DISPLAY_NAME}] \n*Author:* ${gitCommitAuthor} \n*Stage:* ${stageName} \n*Commit Hash* \n${GIT_COMMIT} \n*Commit Message* \n${gitCommitMessage}", channel: slackChannel)
}

pipeline {
  agent any
  options {
    timeout(time: 60, unit: 'MINUTES')
    timestamps ()
  }
  environment {
    CI = true
  }
  stages {
    // stage ('Run application tests') {
    //   agent {
    //     docker {
    //       image "${nodeImage}"
    //       label nodeName
    //       args '-u root -v /etc/pki:/certs'
    //     }
    //   }
    //   steps {
    //     sh 'rm -rf ./app'
    //     script {
    //       if (GIT_BRANCH == 'latest') {
    //         getCommitInfo()
    //       }
    //     }
    //     sh 'make install'
    //     sh 'make code-coverage-before-build'
    //     sh 'make tests'
    //     withCredentials([string(credentialsId: 'psammead-cc-reporter-id', variable: 'CC_TEST_REPORTER_ID')]) {
    //       sh 'make code-coverage-after-build'
    //     }
    //     sh 'make change-scanner'
    //   }
    //   post {
    //     always {
    //       script {
    //         stageName = env.STAGE_NAME
    //       }
    //     }
    //   }
    // }
    stage ('Deploy Storybook & Publish to NPM') {
      when {
        expression { env.BRANCH_NAME == 'latest' }
      }
      agent {
        docker {
          image "${nodeImage}"
          label nodeName
          args '-u root -v /etc/pki:/certs'
        }
      }
      steps {
        sh 'make storybook'
        sh 'rm published.txt || true'
        withCredentials([string(credentialsId: 'npm_bbc-online_read_write', variable: 'NPM_TOKEN')]) {
          sh 'make publish'
        }
        stash name: 'psammead-publishes', includes: 'published.txt', allowEmpty: true
        sh 'rm published.txt || true'
      }
      post {
        always {
          script {
            stageName = env.STAGE_NAME
          }
        }
      }
    }
    stage ('Bumper Bot') {
      when {
        expression { env.BRANCH_NAME == 'BumperBotIntegrate-new' }
      }
      agent {
        docker {
          image "${nodeImage}"
          label nodeName
          args '-u root -v /etc/pki:/certs'
        }
      }
      steps {
        sh 'git fetch --all'
        sh 'git checkout -f latest'
        // unstash 'psammead-publishes'
        sh 'echo -n "@bbc/psammead-assets,@bbc/gel-foundations," >> published.txt'
        sh 'make bumperBot'
        sh 'git status'
        sh 'git diff'
      }
      post {
        always {
          script {
            stageName = env.STAGE_NAME
          }
        }
      }
    }
  }
  post {
    aborted {
      script {
        if (GIT_BRANCH == 'latest') {
          notifySlack('danger', 'Aborted', gitCommitAuthor, stageName, gitCommitMessage, slackChannel)
        }
      }
    }
    failure {
      script {
        if (GIT_BRANCH == 'latest') {
          notifySlack('danger', 'Failed', gitCommitAuthor, stageName, gitCommitMessage, slackChannel)
        }
      }
    }
    success {
      script {
        if (GIT_BRANCH == 'latest') {
          notifySlack('good', 'Success', gitCommitAuthor, stageName, gitCommitMessage, slackChannel)
        }
      }
    }
    unstable {
      script {
        if (GIT_BRANCH == 'latest') {
          notifySlack('danger', 'Unstable', gitCommitAuthor, stageName, gitCommitMessage, slackChannel)
        }
      }
    }
  }
}
