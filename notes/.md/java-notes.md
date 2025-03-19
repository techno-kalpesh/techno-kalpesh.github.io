# Java Contents :
- [Java Contents :](#java-contents-)
- [Introduction to Java](#introduction-to-java)
  - [Java History :](#java-history-)
  - [Difference between Java Programming  and C Programming](#difference-between-java-programming--and-c-programming)
  - [Features of Java](#features-of-java)
  - [Java Editions](#java-editions)
  - [Java Enviroment](#java-enviroment)
- [Setting Up Java Development Environment](#setting-up-java-development-environment)
  - [Step 1: Download and Install the JDK](#step-1-download-and-install-the-jdk)
  - [Step 2: Set Up Environment Variables](#step-2-set-up-environment-variables)
    - [Windows](#windows)
    - [macOS](#macos)
    - [Linux](#linux)
  - [Step 3: Verify the Installation](#step-3-verify-the-installation)
  - [Step 4: Install an Integrated Development Environment (IDE)](#step-4-install-an-integrated-development-environment-ide)
    - [Popular Java IDEs](#popular-java-ides)
  - [Step 5: Create Your First Java Project](#step-5-create-your-first-java-project)
- [Structure of a Java Program](#structure-of-a-java-program)
- [Tokens](#tokens)
  - [Identifiers](#identifiers)
  - [Keywords : ( 50 Keyword in java )](#keywords---50-keyword-in-java-)
  - [Literals :](#literals-)
  - [Operators :](#operators-)
    - [1. Arithmetic Operators :](#1-arithmetic-operators-)
    - [2. Relational Operators :](#2-relational-operators-)
    - [3. Logical Operators :](#3-logical-operators-)
    - [4. Assignment Operators (=):](#4-assignment-operators-)
    - [5. Increment \& Decrement Operators :](#5-increment--decrement-operators-)
    - [6. Conditional Operator :](#6-conditional-operator-)
    - [7. Bitwise Operators :](#7-bitwise-operators-)
    - [8. Special Operators :](#8-special-operators-)
  - [Separators :](#separators-)
- [Variables :](#variables-)
  - [Variable Declaration and Initialization :](#variable-declaration-and-initialization-)
  - [Types of Variables :](#types-of-variables-)
- [Constants :](#constants-)
- [Data Types :](#data-types-)
- [Primitive Data Type](#primitive-data-type)
  - [Numeric data types :](#numeric-data-types-)
    - [1. Integer data type :](#1-integer-data-type-)
    - [2. Floating-point data types :](#2-floating-point-data-types-)
  - [Non-numeric data types :](#non-numeric-data-types-)
    - [1. Character data type :](#1-character-data-type-)
    - [2. Boolean data type :](#2-boolean-data-type-)
  - [Type Casting :](#type-casting-)
    - [Implicit Casting (Widening)](#implicit-casting-widening)
    - [Explicit Casting (Narrowing)](#explicit-casting-narrowing)
- [Non-primitive data structure](#non-primitive-data-structure)
- [Decision-Making statements:](#decision-making-statements)
  - [simple if :](#simple-if-)
  - [if-else :](#if-else-)
  - [Nested-if](#nested-if)
  - [else-if ledder :](#else-if-ledder-)
  - [Switch statement :](#switch-statement-)
    - [Break statement :](#break-statement-)
    - [continue statement :](#continue-statement-)
    - [goto statement :](#goto-statement-)
- [Looping Statement :](#looping-statement-)
  - [while loop](#while-loop)
  - [do-while loop](#do-while-loop)
  - [for loop](#for-loop)
- [Array :](#array-)
    - [Single-Dimensional Arrays](#single-dimensional-arrays)
      - [Declaration](#declaration)
      - [Initialization](#initialization)
      - [Declaration and Initialization](#declaration-and-initialization)
    - [Multi-Dimensional Arrays](#multi-dimensional-arrays)
      - [Declaration](#declaration-1)
      - [Initialization](#initialization-1)
      - [Declaration and Initialization](#declaration-and-initialization-1)
  - [Accessing Array Elements](#accessing-array-elements)
  - [Iterating Over Arrays](#iterating-over-arrays)
  - [Array Methods](#array-methods)
- [Methods](#methods)
  - [Method Parameters](#method-parameters)
  - [Method Return Types](#method-return-types)
  - [Calling Methods](#calling-methods)
  - [Method Overloading](#method-overloading)
  - [Static Methods](#static-methods)
- [Object-Oriented Programming Concepts : (OOPs)](#object-oriented-programming-concepts--oops)
  - [Difference betweeen OOP's and POP](#difference-betweeen-oops-and-pop)
  - [Classes and Objects](#classes-and-objects)
  - [Encapsulation](#encapsulation)
  - [Inheritance](#inheritance)
  - [Polymorphism](#polymorphism)
  - [Abstraction](#abstraction)
- [Interfaces :](#interfaces-)
- [Packages :](#packages-)
- [Exception Handling](#exception-handling)
  - [Types of Exceptions](#types-of-exceptions)
  - [try-catch Block](#try-catch-block)
  - [finally Block](#finally-block)
  - [throw Keyword](#throw-keyword)
  - [throws Keyword](#throws-keyword)
- [File I/O](#file-io)
  - [Introduction to File I/O](#introduction-to-file-io)
  - [Reading from a File](#reading-from-a-file)
    - [Using FileReader and BufferedReader](#using-filereader-and-bufferedreader)
  - [Writing to a File](#writing-to-a-file)
    - [Using FileWriter and BufferedWriter](#using-filewriter-and-bufferedwriter)
  - [Using File Class](#using-file-class)
- [Multithreading :](#multithreading-)
- [Collections Framework](#collections-framework)
  - [List Interface](#list-interface)
    - [ArrayList](#arraylist)
    - [LinkedList](#linkedlist)
  - [Set Interface](#set-interface)
    - [HashSet](#hashset)
  - [Map Interface](#map-interface)
    - [HashMap](#hashmap)
  - [Iterating Over Collections](#iterating-over-collections)
- [Java Memory Management](#java-memory-management)
  - [Introduction to Memory Management](#introduction-to-memory-management)
  - [Memory Areas](#memory-areas)
    - [Heap](#heap)
    - [Stack](#stack)
    - [Method Area](#method-area)
    - [Program Counter (PC) Register](#program-counter-pc-register)
    - [Native Method Stack](#native-method-stack)
  - [Garbage Collection](#garbage-collection)
    - [Types of Garbage Collectors](#types-of-garbage-collectors)
    - [Garbage Collection Phases](#garbage-collection-phases)
  - [Memory Leaks](#memory-leaks)
- [Java Networking](#java-networking)
  - [Introduction to Networking](#introduction-to-networking)
  - [URL Class](#url-class)
  - [URLConnection Class](#urlconnection-class)
  - [Socket Programming](#socket-programming)
    - [Creating a Server](#creating-a-server)
    - [Creating a Client](#creating-a-client)
  
<div style='page-break-after:always;'></div>

# Introduction to Java
## Java History :
Java is a general-purpose , object-oriented programming language and platform developed by **Sun Microsystems in 1991 at california, USA.** Originally called by **Oak** by James Gosling. he know as father of Java.

|Year    | Development |
|:-------:|:-------|
| 1990 |Sun Microsystems strted " the Green Project " to develop a platform-independent language.|
| 1991 | James Gosling & his team developed a new language. |
| 1992 | Developed a touch screen-based home automaton system ( star7 ).|
| 1993 | The project fous on network application to developing Web Applets using Oak. |
| 1994 | The team developed a web browser calle " HotJava " to suppoet java applets. |
| 1995 | Renamed Oak to " Java " , realeased the Beta Version and introduced JVM.
| 1996 | JDK 1.0 offcially was released. |
| 1997 | JDk 1.1 was released. |
| 1998 | Sun relesed Java 2 with SDK 1.2 ( Softtware Development Kit ) |
| 1999 | Sun releases Java 2 Platform, Standard Edition ( J2SE ) and Enterprise Edition (J2EE)
| 2000 | J2SE with SDK 1.3 was relesed. |
| 2002 | J2SE with SDK 1.4 was relesed. |
| 2004 | J2SE with JDK 5.0 was relesed. |
| 2006 | Java SE 6 was relesed. |
| 2011 | Java SE 7 was relesed |

**We can develop two types of java program :**
1. **Standalone Application :**
- Standalone applications are programs written in java to carry out certain tasks on a standalone local computer.
- Executing a standalone java program involes two steps :
    - Compiling sorce code into bytecode using javac compiler.
    - Executing the bytecode program using java interpreter.

2. **Web Applets :**
- Applets are small java program developed for internet application. An applet located on a distant computer (server) can be download via internet and executed o local computer (client) using a java-capable browser.
- Applets are embedded in an HTML document and run inside a web page creating an drunning applets are more complex than creating an application.

## Difference between Java Programming  and C Programming
|Java    | C      |
|:-------|:-------|
|  Java is Object Oriented Programming Language. ( OOPs ) | C is Procedure oriented Programming Language ( POP ) |
| Java is Platform-independent language | C is platform-dependant language |
| java is Support automatic memory management. | c is required manual memory management. |
| Java code compiled into bytecode and executed by JVM. | C code is compiled into machine code and executed directly. |
| Java uses class-based structure. | C uses function-based structure. |
| Java runs slower compared to C due to JVM overhead. | C faster execution as it compiles direct into machine code. |
| Java does not support pointers. | C supports pointers. |

## Features of Java
- **Simple and easy :** 
<br>Java is easy to learnand its syntax is simple , clear and based on c/c++.
- **Object-Oriented :** 
<br>Java is based on OOPs Concept. Everything in java is treated as object, enabling code reusability and modularity.
- **Platform-Independent :** 
<br>Java program compiles into bytecode, which can run on any device (OS) with a JVM.
- **Secure :** 
<br>Java has built-in security features that help protect applications from threats.
- **Robust :** 
<br>Java has strong memory management and exception handling features.
- **Portable :** 
<br>Java program can run on various platform without modification.
- **Dynamic Language :** 
<br>Java supports dynamic loading of classes. Its mean classesare loaded on demand.
- **Multithreaded :** 
<br>Java supports multithreading, allowing deal with many tasks at once.
- **Distributed :** 
<br>Java supports distributed computing with its extensive network libraries.
- **High Performance :** 
<br>Java is designed for high performance with its just-in-time compiler.

## Java Editions
- **Java Standard Edition (SE) :** 
<br>This is the standard version of Java used for developing desktop applications.
- **Java Enterprise Edition (EE) :**
<br>This is used for developing large-scale, distributed, and multi-tiered applications.
- **Java Micro Edition (ME) :**
 <br>This is used for developing applications for mobile devices and embedded systems.

## Java Enviroment
Java enviroment includes a large numbers of development tools and hundreads of classes and methods. The development tools are part of the system known as Java DevlopmentKit ( JDK ) and the classes & menthds are part of Java Standard Library ( JSL ) , also known as the Application Programming Interface ( API ).

- **Java Development Kit (JDK) :**
<br>The Java Development Kit (JDK) is a software development kit used to develop Java applications. They includes tools for developing, debugging, and monitoring Java applications.

    ### Java Developing Tools 
    | Tools | Description |
    |:------|:------------|
    | appletviewer | Enable us to run java applets ( without actually using a Java-compatible browser ). |
    | java | Java interpreter, which runs applets and applications by reading and interpretimg bytecode files. |
    | javac | Java Compiler, which convert java source code into bytecode file that the interpreter can be understand 7 executes. |
    | javadoc | Creates HTML format documentation from java source code files. |
    | javah | Produces header files for use with native methods. |
    | javap | Java disassembler convert bytecode file into a sorce code. |
    | jdb | Java debugger used to find errors in our program. |

- **Application Programming Interface :**
<br>
The java Standard library ( JSL or API ) is a  collection of predefined classes, interfaces and methods that developers can use to build applications without writting code from scratch.
    - Most commonly used packages are :
    1. language Support Package :
        - A collection of classes and method required for implementing basic featurs of java. That automatically imprted in every java program.
        - inclues classes like String, math, Object, System, Thread etc.

    2. Utilities Packages :
        - A collection of classes to provide uyility functions such as date-time functions.
        - includes classes like Date, Randome, HashMap, LinkedList, Collections, ArrayList etc.

    3. Inpute/Outpute package :
        - A collection of classes required for inpute/outpute manipulation.
        - includes Files, InputeStream, OutputStream, BufferedReader, PrintWriter etc.

    4. Networking Package :
        - A collection of classes for communicating withother computers via internet.
        - includes Socket,ServerSocket, URLConnection, InetAdress etc.

    5. AWT Package :
        - The Abstract Windows Tool Kit Package containclasses that implements platform-independent graphical user interface.
        - includes Frame, Button, Lable, TextField, Graphics etc.

- **Java Runtime Environment (JRE) :**
<br>The Java Runtime Environment (JRE) provides the libraries, Java Virtual Machine (JVM), and other components required to run Java applications.
    1. **Java Virtual Machine (JVM) :**
<br>The Java Virtual Machine (JVM) is an abstract computing machine that enables a computer to run a Java program. It converts Java bytecode into machine code and executes it on the host machine.
    ```
    1. Java Program (Source code) -----------> Java Compiler ----------> Java Virtual machine (bytecode)

    2. Java Virtual Machine (Bytecode)--------> Java Interpreter ---------> Host machine (execute machine code)
                                                
    ```

    1. **Runtime Class Libraries :**
<br>A set of core class libraries tha are required for the execution of java programs.
    1. **Development technologies :**
        - Java plug-in : 
        <br>Enables the execution of a java applet on the browser.
        - java Web Start : 
        <br>Enables remote-development of an appliction. With Web Start, users can launch an application directly from the Web browser without going through the installation procedure.

<div style='page-break-after:always;'></div>

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
<div style='page-break-after:always;'></div>

# Structure of a Java Program
A basic Java program consists of the following components:
```
   1. Documentation Section            - Suggested
   2. Package Statement                - Optional
   3. Import Statements                - Optional
   4. Interface Statement              - Optional
   5. Class Declaration                - Optionalkv
   6. Main Method Class                - Essential
       {
        main method defination;     
       }
```
1. **Documantation Section :**
   - This section includes comments for understanding the program, the author and other details. It can be single-line (//) or multi-line (/* */).
   - Comments are non-executable statements used to add notes in the code, They are ignored by the compiler.
  
2. **Package Statement :**
   - A package in java is a way to organize classes,  interfaces and and sub-packages into a structured folder system.
   - A program can have onl;y one package statement.
  
3. **Import Statements :**
   - Import statement are used to import build-in or user-defined classes from other packages. 
   - Ex : `import java.util.*; //imports all classes from java.util.`

4. **Interface Statement :**
   - An interface in java is a blueprint of class. It has static constants and abstract methods (method without body).
   - This is used to achive abstraction an dmultiple inheritance.

5. **Class Declaration :**
   - A java program may contain multiple class defination. The number of classes used depends on the complexity of the program.
   - A class contains data members and member functions. `class` keyword  used to declare class defination.

6. **Main Method Class :**
   - The main method class is the class that contain the main() method, which is the starting point of a java program.
   - The java program name must be same as the main method claass.
   - Ex : ` HelloWord.java`
  
    ```java
    //Sample Program
    package com.example;
    import java.util.*;
    public class HelloWorld
    {
        public static void main(String args[])
        {
            System.out.println("Hello, World!");
        }
    }
    ```
    - public :
    The keyword `public` is an access specifiers. It makes main() method asccessib
