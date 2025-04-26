package com.example;

import org.junit.jupiter.api.Test;
import java.io.File;
import java.nio.file.Files;
import java.io.IOException;

public class GitTests extends TestBase {

    private static final String TEST_REPO_URL = "https://github.com/your-username/your-test-repo.git";
    
    @Test
    public void testCloneAndAddNewFile() throws IOException, InterruptedException {
        File tempDir = Files.createTempDirectory("gitrepo").toFile();

        String newFileName = "newFile.txt";
        String newContent = "Hello, this is a new file.";

        cloneRepo(TEST_REPO_URL, tempDir);
        createFile(tempDir, newFileName, newContent);
        commitAndPush(tempDir, "Added new file: " + newFileName);
    }

    @Test
    public void testCloneAndUpdateExistingFile() throws IOException, InterruptedException {
        File tempDir = Files.createTempDirectory("gitrepo").toFile();

        String existingFileName = "existingFile.txt"; // Assume this file exists
        String appendContent = "\nAppended new line.";

        cloneRepo(TEST_REPO_URL, tempDir);
        appendToFile(tempDir, existingFileName, appendContent);
        commitAndPush(tempDir, "Updated file: " + existingFileName);
    }
}
