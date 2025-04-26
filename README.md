# Pre-requisite -
Node - 23.10 or above version should be present on your local

To setup and run test cases -
1. Go to root directory of the project
2. Run ```npm install```
3. Run ```npm run install-playwright```
4. Run ```npx playwright test tests/ui.spec.ts```

# Assumption

As nothing menyioned regarding POM, logging, etc. That's why I've just created
a single file to implement the requested scenario. However, if you see the playwright.config.ts file
I've added some configs there like - cross browser, slowmo, retries, screenshots, videos and trace.
You can use these configs to test around it.