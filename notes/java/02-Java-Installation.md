# Setting Up Java Development Environment
## Step 1: Download and Install the JDK
1. Go to the [Oracle JDK download page](https://www.oracle.com/java/technologies/javase-downloads.html).
2. Download the appropriate JDK version for your operating system.
3. Follow the installation instructions for your operating system:
    - **Windows**: Run the installer and follow the on-screen instructions.
    - **macOS**: Open the downloaded DMG file and follow the on-screen instructions.
    - **Linux**: Use the package manager to install the JDK, or download and extract the tar.gz file.

## Step 2: Set Up Environment Variables
### Windows
1. Open the **Control Panel**.
2. Go to **System and Security** > **System** > **Advanced system settings**.
3. Click on the **Environment Variables** button.
4. In the **System variables** section, click **New** and enter the following:
    - **Variable name**: `JAVA_HOME`
    - **Variable value**: The path to your JDK installation directory (e.g., `C:\Program Files\Java\jdk-<version>`).
5. Find the **Path** variable in the **System variables** section, select it, and click **Edit**.
6. Add the following to the end of the **Path** variable value:
    - `%JAVA_HOME%\bin`
7. Click **OK** to close all dialog boxes.

### macOS
1. Open a terminal window.
2. Open the `.bash_profile` or `.zshrc` file in your home directory using a text editor.
    ```sh
    nano ~/.bash_profile
    ```
3. Add the following lines to the file:
    ```sh
    export JAVA_HOME=$(/usr/libexec/java_home)
    export PATH=$JAVA_HOME/bin:$PATH
    ```
4. Save the file and close the text editor.
5. Run the following command to apply the changes:
    ```sh
    source ~/.bash_profile
    ```

### Linux
1. Open a terminal window.
2. Open the `.bashrc` or `.profile` file in your home directory using a text editor.
    ```sh
    nano ~/.bashrc
    ```
3. Add the following lines to the file:
    ```sh
    export JAVA_HOME=/path/to/jdk
    export PATH=$JAVA_HOME/bin:$PATH
    ```
4. Save the file and close the text editor.
5. Run the following command to apply the changes:
    ```sh
    source ~/.bashrc
    ```

## Step 3: Verify the Installation
1. Open a terminal or command prompt.
2. Run the following command to verify that the JDK is installed correctly:
    ```sh
    java -version
    ```
3. You should see output similar to the following:
    ```
    java version "1.8.0_281"
    Java(TM) SE Runtime Environment (build 1.8.0_281-b09)
    Java HotSpot(TM) 64-Bit Server VM (build 25.281-b09, mixed mode)
    ```

## Step 4: Install an Integrated Development Environment (IDE)
### Popular Java IDEs
- **IntelliJ IDEA**: A powerful and popular IDE for Java development. [Download IntelliJ IDEA](https://www.jetbrains.com/idea/download/)
- **Eclipse**: A widely used open-source IDE for Java development. [Download Eclipse](https://www.eclipse.org/downloads/)
- **NetBeans**: Another popular open-source IDE for Java development. [Download NetBeans](https://netbeans.apache.org/download/index.html)

## Step 5: Create Your First Java Project
1. Open your preferred IDE.
2. Create a new Java project.
3. Add a new Java class with the following code:
    ```java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    ```
4. Run the project to see the output:
    ```
    Hello, World!
    ```
<br>
[← Previous](01-introduction.md) | [Next →](03-inheritance.md)
