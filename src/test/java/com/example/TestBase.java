package com.example;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import io.qameta.allure.Step;

public class TestBase {

    @Step("Clone repo from {repoUrl} into {localDir}")
    public void cloneRepo(String repoUrl, File localDir) throws IOException, InterruptedException {
        GitUtils.runCommand("git clone " + repoUrl + " .", localDir);
    }

    @Step("Create a new file {fileName} with content")
    public void createFile(File dir, String fileName, String content) throws IOException {
        File file = new File(dir, fileName);
        try (FileWriter writer = new FileWriter(file)) {
            writer.write(content);
        }
    }

    @Step("Append to existing file {fileName}")
    public void appendToFile(File dir, String fileName, String content) throws IOException {
        File file = new File(dir, fileName);
        try (FileWriter writer = new FileWriter(file, true)) {
            writer.write(content);
        }
    }

    @Step("Git add, commit, and push changes")
    public void commitAndPush(File dir, String message) throws IOException, InterruptedException {
        GitUtils.runCommand("git add .", dir);
        GitUtils.runCommand("git commit -m \"" + message + "\"", dir);
        GitUtils.runCommand("git push", dir);
    }
}
