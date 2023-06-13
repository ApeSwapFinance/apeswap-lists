# apeswap-lists

## How to Manage this Repo

When you would like to make an edit to one of the lists in this repo, please only edit the `.ts` files. This is for better type control and to reduce the chance of errors. To apply the changes run `yarn build` & `yarn legacy-build` in the console.

For example, to edit a farm:

1. Open the `constants/farms.ts` file
2. Make the edits & save
3. Run `yarn build` and `yarn legacy-build` to apply these changes to the corresponding JSON files
4. Run `yarn test` to make sure the JSON files are valid
5. Commit to the Github repo

Humans interact with the TypeScript files & our services pull in the JSON files! ❤️

## Testing Locally

1. `yarn` (Install latest deps)
2. *Update lists as needed*
3. `yarn build && yarn legacy-build`
4. `npm link`
5. Go to frontend repo locally `npm link @ape.swap/apeswap-lists`

### Updating while linked

1. *Update lists as needed*
2. `yarn build && yarn legacy-build`
3. The changes should then be reflected on the local linked repo.

### Unlink

1. Go to frontend repo locally `npm unlink @ape.swap/apeswap-lists`
2. Still on local frontend: `yarn install` (Reinstall package)
3. `npm unlink`
