# monroeu_it165_26_03

Monroe University Fall 2026

## Assignment Submission Process

To start the assignment:

```bash
git status
```

If it shows you are on the `main` branch, something like this:
```bash
On branch main
Your branch is up to date with 'origin/main'.
```

then run:

```bash
git pull
```

If it shows you are on a different branch, switch back to `main` first:

```bash
git checkout main
git status
git pull
```

Then create a new branch for the assignment:

```bash
git checkout -b assignment_1
```

Create a folder inside the repo named `assignment_1` and place your files inside it.

Once all the work is done, stage and commit your changes:

```bash
git add .
git commit -m "Submission for assignment 1"
```

Push your branch:

```bash
git push
```

If this fails, run:

```bash
git push origin --set-upstream assignment_1
```

Then click on the link provided in the terminal to open GitHub.

Create the pull request and merge it when ready.

After merging come back to the visual studio, in the terminal run:

```bash
git checkout main
git pull
```
