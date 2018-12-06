# Psammead - News React Component Library

# Getting Started

### Clone this repositry

```
git clone git@github.com:bbc-news/psammead.git
```

### Setup Local Environment

```
cd psammead && npm install
```

NB, this automatically runs `npm run install:packages` in a postinstall step for you.

### Run Storybook

```
npm run storybook
```

### Build Packages/Components

```
npm run build
```

### Publishing Packages

#### Setting up your npm account

- Create an npm account with your bbc email address. https://www.npmjs.com
- In your npm profile settings, set up Two Factor Authentication. Enable it for authorization and publishing
- Back up your recovery codes for your account
- Join the BBC npm org by following the process here: https://github.com/bbc/npm When you're added to the org and signed in, you should be able to see all public and private `@bbc` packages here: https://www.npmjs.com/settings/bbc/packages

#### Publishing a package

- In your terminal, run `npm login` and follow the steps for authentication
- `npm publish packages/<PATH_TO_PACKAGE> --otp=<YOUR_2FA_CODE>`
  e.g. `npm publish packages/components/psammead-paragraph --otp=<YOUR_2FA_CODE>`

#### Making a package public

- `npm access public @bbc/<PACKAGE_NAME> --otp=<YOUR_2FA_CODE>`
