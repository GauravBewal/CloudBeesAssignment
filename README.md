# To setup and run test cases -

1. Go to root directory of the project
2. Run ```npm install```
3. Run ```npm run install-playwright```
4. Run ```npx playwright test tests/ui.spec.ts```

## Generate Allure Report

npx allure generate allure-results --clean
npx allure open

# Assumption

As nothing menyioned regarding POM, logging, etc. That's why I've just created
a single file to implement the requested scenario. However, if you see the playwright.config.ts file
I've added some configs there like - cross browser, slowmo, retries, screenshots, videos and trace.
You can use these configs to test around it.

# For JAVA Project 

## Assumptions
- Git must be installed and available on system PATH.
- The repository URL must be accessible and user should have push permissions.
- The repo is simple (no complex branching, no LFS, etc.).
- Existing file must already be present in the repo for the update test.
- Temporary directories are used for cloning to keep workspace clean.


## How to Run
1. Clone this project.
2. Update `TEST_REPO_URL` in `GitTests.java` with your repo URL.
3. Run tests:
    ```bash
    mvn clean test
    ```

4. Generate Allure report:
    ```bash
    allure serve target/allure-results
    ```

## Notes
- Commands are run assuming a Linux/MacOS environment (`bash -c`). For Windows, modify `GitUtils.java`.
