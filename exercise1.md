CI in Java

Tools used for linting in Java are like Checkstyle or PMD.
Checkstyle can check many aspects of source code. It can find class design problems, method design problems. It also has the ability to check code layout and formatting issues.

For testing commonly used tools are JUnit for unit testing and Mockito for mocking the interfaces and objects.
JUnit is a test automation framework for the Java programming language. JUnit is often used for unit testing, and is one of the xUnit frameworks.
Mockito is an open source testing framework. The framework allows the creation of test double objects (mock objects) in automated unit tests for the purpose of test-driven development (TDD) or behavior-driven development (BDD).

For building Java projects, Maven is a popular choice.
Maven is a build automation tool used primarily for Java projects. Maven addresses two aspects of building software: how software is built and its dependencies.

The most popular alternative for CI setup seems to be TeamCity. And some others to be mentioned are AWS CodePipeline, Bamboo, CircleCI and GitLabCI.

Would this setup be better in a self-hosted or a cloud-based environment?
It depends. In self-hosted you get more control how to configure and manage the system but on the other hand someone has to maintain the system, software updates and so on. In cloud-based environment the maintenance is not an issue and the developers can concentrate in developing the software.
Fully managed (cloud-based) CI/CD platform ensures that as a developer, you have speed and agility (faster release times and maintained & managed integrations), automation (a platform to easily build and improve automation) and a reliable platform that was built for mobile needs specifically.

For making a decision there's needed to evaluate the mobility needs, maintenance resources and budget. Also if any special configuration setup is needed.