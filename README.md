## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= **18**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension on `src/manifest.json`.
5. Run `npm install` to install the dependencies.
6. Run `npm start`
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
8. Happy hacking.

## SSH Keys

### Generating Key

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Press enter for all the options

### Add Key to Github

1.

```
clip < ~/.ssh/id_ed25519.pub
```

2. Visit Github, then click your profile picture in top right of page and go to Settings.

3. Click SSH and GPG keys in the left sidebar

4. Click New SSH key / Add SSH key

5. Give a title to your key (doesn't really matter)

6. Paste your key into the key field and save
