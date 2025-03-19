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
    The keyword `public` is an access specifiers. It makes main() method asccessible from anywhere in the program. The JVM needs to call main(), so it must be public.

    - staict :
    The keyword `static` allows the main() method to run without creating an instance of the class. The JVM calls main() directly  without creating an object.

    - void   :
    The keyword `void ` means the method does not return any value.
    
    - Stringargs[] :
    The ` String args[]` inthe main method allows java program to accept command-line arguments when executed. Where `args[]` is  array of object of the `String` class.

    - System.out.println();
    `System.out.println();`used to print output to the console. where,
      - `System` is  a build-in class from java.lang package.
      - `out` is a static member of System, which is an instance of printStream.
      - `println` is a method of PrintStream that prints output and cursor move to next line.
      - ` ; ` semicolon are used in java for teminate a statement.

# Tokens
Smallest individual unit in a program are known as tokens.
<br>**Types of tokens :**
- Identifiers
- Keywords
- literals
- Operators
- Separators

## Identifiers
Identifiers are names used to declear user defined elements in program such as variables, classes, methods, etc.
<br>
- Rules for identifiers :
  - They must start with a letter, dollar sign (`$`), or underscore (`_`)
  - It contain letters (`A-Z`, `a-z`) , digits (`0-9`), underscore (`_`) and dollar signs (`$`).
  - They must not begin with digit.
  - java is case sensitive.
  - They can be any length.
  - No blank space allowed.
  - Cannot be a java keyword.

- Example
    ```java
    int myVariable;
    String $myString;
    double _myDouble;
    ```

## Keywords : ( 50 Keyword in java )
 Keyword are predefind words that has special meaning to the compiler which is cannot be alter.
 <br>

|        |        |     |        |
|:-------|:-------|:----|:-------|
|abstract|assert|boolean|break|
|byte|case|catch|char|
|class|const|continue|default|
|do|double|else|enum|
|extends|final|finally|float|
|for|if|goto|implements|
|import|instanceof|int|interface|
|long|native|new|package|
|private|protected|public|return|
|short|static|strictfp|super|
|switch|synchronized|this|throw|
|throws|transient|try|void|
|volatile|while
|        |        |     |        |

## Literals :
- Literals are sequence of characters that a fixed values assigned to variables with specific data type.
- it may be digits,letters and other characters.
- Ex : ` int x=10; // Here, 10 is a interger literal.`
- Types of literals :
  - Interger literals
  - Floating-point literals
  - Character literals
  - String literals
  - Boolen literals
  - Null literals

## Operators :
Operators are sysmbols that used to perform mathematical operations on variables and values (operands). 
- types java operatrs :
  1. **Arithmetic operators :** `+`, `-`, `*`, `/`, `%`
  2. **Relational operators :** `==`, `!=`, `>`, `<`, `>=`, `<=`
  3. **Logical operators :** `&&`, `||`, `!`
  4. **Assignment operators :** `=`, `+=`, `-=`, `*=`, `/=`, `%=`
  5. **Bitwise operators :** `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
  6. **Increment & Decrement operators :** `+`, `-`, `++`, `--`, `!`
  7. **TConditional operator :** `?`,`:`
  8. **Special operators :** `instanceof`,`.` 

### 1. Arithmetic Operators :
Arithmetic operators are  Used to perform basic mathematical operations.
|Operators| Meaning |
|:--------:|:-------|
|+|Addition or unary plus|
|-|substraction or unary minus|
|*| Multiplication|
|/| division|
|%|Modulo (reminder)|

- `Example :`
```java
int a = 10;
int b = 5;

int sum = a + b;        // Addition
int difference = a - b; // Subtraction
int product = a * b;    // Multiplication
int quotient = a / b;   // Division
int remainder = a % b;  // Modulus
```
### 2. Relational Operators :
Relational operators are used to compare two values and return boolen results.
|Operators| Meaning |
|:--------:|:-------|
|<| is less than|
|>| is greater than|
|<=| is less than or equal to|
|>=| is greater than or equal to|
|==| is equal to|
|!=| is not equal to|
- `Example :`
```java
int a = 10;
int b = 5;

boolean isEqual = (a == b);         // false
boolean isNotEqual = (a != b);      // true
boolean isGreater = (a > b);        // true
boolean isLesser = (a < b);         // false
boolean isGreaterOrEqual = (a >= b); // true
boolean isLesserOrEqual = (a <= b);  // false
```
### 3. Logical Operators :
Logical operator are used to combining more than one condition in decision-making. 
|Operators| Meaning |
|:--------:|:-------|
|&&|logical AND|
| \|\| | logical OR |\
| ! | logical NOT|

- `Example :`
```java
boolean a = true;
boolean b = false;

boolean and = (a && b);  // Logical AND: false
boolean or = (a || b);   // Logical OR: true
boolean not = !a;        // Logical NOT: false
```
### 4. Assignment Operators (=):
Assinmemnt operator are used to assign and modify values to variables.
- This operator assign the value of the right side to left side.
- `Shorthand` assignment operators combine arithmetic or bitwise operations with assignmet operator in comppact way.

- `Example :`
```java
int a = 10;
a += 5;  // a = a + 5; a is now 15
a -= 3;  // a = a - 3; a is now 12
a *= 2;  // a = a * 2; a is now 24
a /= 4;  // a = a / 4; a is now 6
a %= 2;  // a = a % 2; a is now 0
```
### 5. Increment & Decrement Operators :
This operator known as Unary Operators that used to increase or decrease a variable value by 1.
- it has two types 
  -  Pre-increment/decrement : increse/decrese value by 1 first, then use.
  -  Post-increment/decrement : use first , then increse/decrese value by 1.
  -  `Example :`
```java
int x = 10;

// this is pre-increment & pre-decrement
System.out.println("x = "+(++x); // Increment: x is now 11 
System.out.println("x = "+(--x); // Decrement: x is now 10

// this is post-increment & pre-decrement
System.out.println("x = "+(x++);  // Increment: x is now 10 
System.out.println("x = "+(x--);  // Decrement: x is now 10

```
### 6. Conditional Operator :
This is known as ternary operator, that used as shorthand for the `if-else` statement.
- Syntax : ` (condition)? true value : false value ;`
- Example :
```java
int a = 10;
int b = 5;
int max = (a > b) ? a : b;  // max is 10
```

### 7. Bitwise Operators :
Bitwise operatrs are Used to perform bit-level operations on binary data.
|Operators| Meaning |
|:--------:|:-------|
|&|bitwise AND|
|!|bitwise OR|
|^| bitwise exclusive OR|
|~|one's complement|
|<<|shift left|
|>>|shift right|
|>>>|shift right with zero fill|
- `Example :`
```java
int a = 5;  // 0101 in binary
int b = 3;  // 0011 in binary

int and = a & b;  // Bitwise AND: 0001 (1)
int or = a | b;   // Bitwise OR: 0111 (7)
int xor = a ^ b;  // Bitwise XOR: 0110 (6)
int not = ~a;     // Bitwise NOT: 1010 (-6 in 2's complement)
int leftShift = a << 1;  // Left shift: 1010 (10)
int rightShift = a >> 1; // Right shift: 0010 (2)
```
### 8. Special Operators :
This are Unique operators that have special functionality in java.
- Instanceof Operator : Used to check if an object is an instance of class.
- Dot operator ( . ) : Used to access memberss of a class or object.
- `Example :`
```java
class Example
{
    public static void main(Strin args[])
    {
        Example obj=new Example();
        boolen x = obj instanceof Example; // instanceof operator
        System.out.println(x); // . operator used to access println method from System class.
    }
}
``` 
## Separators :
Seperators in java are symbols used to define code structure and separate elements  like variables, expressions and statements.

|Symbol|Name|Description| Example |
|:-----:|:-----|:-----|:-----|
| ( )|Paranthess|Used in method call, control statements and expressions.| System.out.println();|
|{ }|Curly Braces|Used to definr block of code like classes, methods and loop etc.| if (condition) {  //Statements; }|
|[ ]| Squre brackets | Used to declare and access array elememnts. | int arr[ ]={1, 2, 3}|
|;| Semicolon | Used to terminate statements in java.| int x = 10;|
|,| Comma | Used to separate variables,parameters and loop expression. | int a, b, c;
|.| Dot|Used to access class members.| obj.method();|
|:| Colon | Used in lables and the conditional ( ? : ) operator. | int min=(a<b)?a:b;|


# Variables :
Variables are containers for storing data values. That can be changed during progrm execution. 
- variable must be declare befor it is used in the program.
- **Rules for variable naming :**
  - They must start with a letter, dollar sign (`$`), or underscore (`_`)
  - It contain letters (`A-Z`, `a-z`) , digits (`0-9`), underscore (`_`) and dollar signs (`$`).
  - They must not begin with digit.
  - java is case sensitive.
  - They can be any length.
  - No blank space allowed.
  - Cannot be a java keyword
  - `Example :`
  
    ```java
    int myAge = 25;
    float $price = 19.99f;
    char _grade = 'A';
    ```
## Variable Declaration and Initialization :
- Variable declaration means creating a variable with a specific data type and name without assigning a value.
- variable initialization means assigning a value to a declared variable.
- Synatx : datatype variablename; or  datatype variablename = value;

```java
    int myNum;  // Declaration
    myNum = 5;  // Initialization

    int myOtherNum = 10;  // Declaration and initialization
```
## Types of Variables :
  1. **Local variable :**
   - A variable declared insede the method body is called local variable.
   - Scope is limited to the block of code where they are declare.
   - Cannot have access modifiers like public, private or static.
   - stored in stack memory and deleted when the method execution ends. 
  2. **Instance Variable :**
   - A variable declared insede a class but outside the any method, constructor or block.
   - its known as Non-static variable.
   - Each object has its own copy of variable.
   - Can be accessed using object references.
   - Can have access modifires like public, private and protected.
   - stored in heap memory.
  3. **Static variable :**
   - A static variable are declared inside a class but with the `static` keyword.
   - stored in the method area ( classs area).
   - static variable are shared among all objects of the class. The single copy for all instances. 
   - Can be accessed using class name or object references.
  
- Example for  types of variable :
 ```java
 class Example {
    int instanceVar = 10;  // Instance variable
    static int staticVar = 20;  // Static variable

    void fun1() {
        int localVar = 30;  // Local variable
        System.out.println("Inside fun1:");
        System.out.println("Local Variable: " + localVar);
        System.out.println("Instance Variable: " + instanceVar);
        System.out.println("Static Variable: " + staticVar);
        instanceVar++;  // Modify instance variable
        staticVar++;  // Modify static variable
    }

    void fun2() {
        int localVar = 40;  // Local variable (separate for this method)
        System.out.println("Inside fun2:");
        System.out.println("Local Variable: " + localVar);
        System.out.println("Instance Variable: " + instanceVar);
        System.out.println("Static Variable: " + staticVar);
        instanceVar++;  // Modify instance variable
        staticVar++;  // Modify static variable
    }

    public static void main(String[] args) {
        Example obj1 = new Example();
        Example obj2 = new Example();

        obj1.fun1();  // Call fun1 using obj1
        obj2.fun2();  // Call fun2 using obj2

        System.out.println("\nAfter calling fun1 and fun2:");
        System.out.println("obj1 Instance Variable: " + obj1.instanceVar);
        System.out.println("obj2 Instance Variable: " + obj2.instanceVar);
        System.out.println("Static Variable: " + staticVar);
    }
}
 ```
# Constants :
Constants are fixed values that does not change during the program execution. They are declared using the `final` keyword.
- Types of constants :
    1. Integer Constant
    2. Real Constant
    3. Single Character Constant
    4. String Constant
    5. Backslash Character Constant

1. Interger Constant :
   -
2. Real Constant :
   -
3. Single Character Constant :
   -
4. String Constant :
   -
5. Backslash Character Constant :
   -

# Data Types : 
- Data types specifies size and which type of data stored in variable.
- A data structure is a way of organizing data in a computer, so it can be used efficiently.
- Data types classified into :
  

# Primitive Data Type
- Primitive data types are the fundamental data types store single values directly in memory
- They are predefined by java and used for basic computations.
- It has two types :
    - Numeric data types 
    - Non-numeric data types
## Numeric data types :
### 1. Integer data type :
- Integer data type used for store whole numbers without decimals.
- Java supports four types of integers, they are byte, short, int and long.
  
| Type | Size | Range |
|:------|:------|:-------|
|byte| 1 byte | -128 to 127 ($-2^7$ to $2^7-1$)|
|short|2 byte| -32,768 to 32 767 ( $-2^15$ to $2^15-1$)|
|int|4 byte| -2,147,483,648 to 2,147,483,647 ($-2^31 $ to $2^31-1$)|
|long | 8 byte| -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 ($-2^63$ to $2^63-1$)

### 2. Floating-point data types : 
- Floating point data type used to store numbers with decimal.
- It has two types :
    - float :
        - Used to store single-precision numbers.
        - Numbers with 6-7 decimal places.
        - to declare `float` keyword used.
        - required `f` or `F` at the end.
        - size is `4 bytes` and range is ` 3.4e-038 to 1.7e+0.38`
        - Ex : `float PI = 3.142F;`
    - double :
        - Used to store double-precision numberss.
        - numbers with 15-16 decimal places.
        - to declare `double` keyword used
        - Size is `8 bytes` and range `3.4e-038 to 1.7e+0.38`
     
## Non-numeric data types :
### 1. Character data type :
- Used to store single character such as letters, symboles, unicode characters.
- to declare `char` keyword used.
- Size is 2 bytes, because it uses uniocode (UTF-16) that allowing it to store characters from multiple languages and symbols.
- Unlick ASCII, which is limited to 1 byte.
### 2. Boolean data type :
- Used to store `true`or `false` value.
- to declare `boolen` keyword used.
- Used in conditional checks & logical operations.
- `true` represent wih 1 & `false` represented with 0 (zero).
- size is `1 bit`
- ex : ` boolen ispass = true;`
## Type Casting :
Type casting is the process of converting one data type to another.

### Implicit Casting (Widening)
Automatic conversion from a smaller type to a larger type.
```java
int myInt = 9;
double myDouble = myInt;  // Automatic casting: int to double
```

### Explicit Casting (Narrowing)
Manual conversion from a larger type to a smaller type.
```java
double myDouble = 9.78;
int myInt = (int) myDouble;  // Manual casting: double to int
```
# Non-primitive data structure
Data structure that are derived from the primitive data strucure are called non-primitive data structures. Used to store group of values under single name.
- Types of Non-primitive data types : 
    1. Arrays
    2. Classes
    3. Interfaces

# Decision-Making statements:
Decision making statements are used to execute block code or statement based on given codition.
- Types of control statements :
    - simple if
    - if-else
    - else-if ladder
    - switch statement
## simple if :
```
```
## if-else :
```
```
## Nested-if
```
```
## else-if ledder :
```
```
## Switch statement :
```
```
### Break statement :
### continue statement :
### goto statement :
# Looping Statement :
looping statement are used to execute block code repeatedlyy until given condition is true.
- types of looping statement :
    - while loop
    - do-while loop
    - for loop

## while loop
```
```
## do-while loop
```
```
## for loop
```
```
   
# Array :
An array is a collection of homogeneous elements stored in contiguous memory locations.
- Types of Array :
    - Single-dimensional Array
    - Multi-dimensional Array
### Single-Dimensional Arrays
#### Declaration
```java
int[] myArray;
```
#### Initialization
```java
myArray = new int[5];
```
#### Declaration and Initialization
```java
int[] myArray = new int[5];
int[] myArray = {1, 2, 3, 4, 5};
```

### Multi-Dimensional Arrays
#### Declaration
```java
int[][] myArray;
```
#### Initialization
```java
myArray = new int[3][4];
```
#### Declaration and Initialization
```java
int[][] myArray = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
```

## Accessing Array Elements
Array elements are accessed using their index.

-  Example
```java
int[] myArray = {1, 2, 3, 4, 5};
System.out.println(myArray[0]);  // Output: 1
System.out.println(myArray[4]);  // Output: 5
```

## Iterating Over Arrays
You can use loops to iterate over array elements.

-  Example
```java
int[] myArray = {1, 2, 3, 4, 5};

for (int i = 0; i < myArray.length; i++) {
    System.out.println(myArray[i]);
}

for (int num : myArray) {
    System.out.println(num);
}
```

## Array Methods
Java provides several built-in methods to manipulate arrays.

-  Example
```java
import java.util.Arrays;

int[] myArray = {5, 3, 8, 2, 9};

Arrays.sort(myArray);  // Sorts the array
System.out.println(Arrays.toString(myArray));  // Converts array to string
```

Next, we will cover methods in Java.

# Methods
Methods are blocks of code that perform a specific task. They are used to define the behavior of objects and to execute code.

- `Syntax :`
```java
returnType methodName(parameters) {
    // Method body
}
```

- `Example :`
```java
public class MyClass {
    public void myMethod() {
        System.out.println("Hello, World!");
    }
}
```

## Method Parameters
Methods can take parameters (arguments) to perform operations on them.

- Example
```java
public class MyClass {
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}
```

## Method Return Types
Methods can return a value using the `return` statement.

- Example
```java
public class MyClass {
    public int add(int a, int b) {
        return a + b;
    }
}
```

## Calling Methods
Methods are called using the dot notation on an object of the class.

- Example
```java
public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.myMethod();  // Calling method without parameters

        obj.greet("Alice");  // Calling method with parameters

        int result = obj.add(5, 3);  // Calling method with return value
        System.out.println(result);  // Output: 8
    }
}
```

## Method Overloading
Method overloading allows multiple methods with the same name but different parameters within the same class.

- Example
```java
public class MyClass {
    public void display(int a) {
        System.out.println("Argument: " + a);
    }

    public void display(int a, int b) {
        System.out.println("Arguments: " + a + ", " + b);
    }
}
```

## Static Methods
Static methods belong to the class rather than an instance of the class. They can be called without creating an object of the class.

- Example
```java
public class MyClass {
    public static void myStaticMethod() {
        System.out.println("Static method called.");
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass.myStaticMethod();  // Calling static method
    }
}
```




# Object-Oriented Programming Concepts : (OOPs)
Object-Oriented Programming (OOP) is a programming approach that focuses on oragnazing data by combining both data and function as an object.


## Difference betweeen OOP's and POP
| Object Oriended Programming | Procedural Oriended Programming |
|:----------------------------|:--------------------------------|
| OOPs focuses on Object. ( data orgnazing ) | POP focuses on procedure. |
| The program is divided into functions. | The program is divided into objectss. |
| It follows bottom-up approach. | It follows top-down approach. |
| Its inheritance not supported. | Its inheritance is not supported. |
| It uses an access specifiers. | it doesn't use an access specifiers. |
| Data hiding support due to encapsulation. | No data hiding supported. |
| virtual function supported. | No virtual functio supported. |
| Overloading is possible in the form of function overloading & operator overloading. | Overloading is not possible. |
| Less secure as dsts is globally accessible. | More secur due to encapsulation. |
| Ex - C, Pascal, COBAL | Ex - C++, Java, Python |
|                       |                        |

## Classes and Objects
- **A class** is a blueprint of objects. that contains data member & member functions.
    - In java first letter of class name is Capital.
- **An object** is an instance of a class. it has properties(attributes) & behavire(functions).

- Example
```java
public class Car {
    // Fields (attributes)
    String color;
    String model;

    // Constructor
    public Car(String color, String model) {
        this.color = color;
        this.model = model;
    }

    // Method (behavior)
    public void drive() {
        System.out.println("The car is driving.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating objects
        Car car1 = new Car("Red", "Toyota");
        Car car2 = new Car("Blue", "Honda");

        // Accessing fields and methods
        System.out.println(car1.color);  // Output: Red
        System.out.println(car2.model);  // Output: Honda
        car1.drive();  // Output: The car is driving.
    }
}
```

## Encapsulation
Encapsulation is the principle of bundling data (fields) and methods that operate on the data into a single unit (class). It restricts direct access to some of the object's components.

- Example
```java
public class Person {
    // Private fields
    private String name;
    private int age;

    // Public getter and setter methods
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("Alice");
        person.setAge(25);

        System.out.println(person.getName());  // Output: Alice
        System.out.println(person.getAge());   // Output: 25
    }
}
```

## Inheritance
Inheritance is the mechanism by which one class (child class) inherits the properties and behavior of another class (parent class).

- Example
```java
// Parent class
public class Animal {
    public void eat() {
        System.out.println("The animal is eating.");
    }
}

// Child class
public class Dog extends Animal {
    public void bark() {
        System.out.println("The dog is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();  // Inherited method
        dog.bark();  // Child class method
    }
}
```

## Polymorphism
Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. It enables a single method to work in different ways based on the object it is acting upon.

- Example
```java
public class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound.");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog barks.");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows.");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound();  // Output: The dog barks.
        myCat.makeSound();  // Output: The cat meows.
    }
}
```

## Abstraction
Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object.

- Example
```java
// Abstract class
public abstract class Shape {
    // Abstract method
    public abstract void draw();
}

// Concrete class
public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle.");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape myShape = new Circle();
        myShape.draw();  // Output: Drawing a circle.
    }
}
```
# Interfaces :
# Packages :
# Exception Handling
Exception handling in Java is a mechanism to handle runtime errors, ensuring that the normal flow of the application is maintained. 
- It involves the use of `try`, `catch`, `finally`, `throw`, and `throws` keywords.

## Types of Exceptions
- **Checked Exceptions**: Exceptions that are checked at compile-time.
- **Unchecked Exceptions**: Exceptions that are checked at runtime.

## try-catch Block
The `try` block contains code that might throw an exception. The `catch` block catches and handles the exception.

- Example
```java
public class Main {
    public static void main(String[] args) {
        try {
            int[] myArray = {1, 2, 3};
            System.out.println(myArray[5]);  // This will throw an ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is out of bounds!");
        }
    }
}
```

## finally Block
The `finally` block contains code that is always executed, whether an exception is thrown or not.

-  Example
```java
public class Main {
    public static void main(String[] args) {
        try {
            int[] myArray = {1, 2, 3};
            System.out.println(myArray[5]);  // This will throw an ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is out of bounds!");
        } finally {
            System.out.println("This block is always executed.");
        }
    }
}
```

## throw Keyword
The `throw` keyword is used to explicitly throw an exception.

-  Example
```java
public class Main {
    public static void checkAge(int age) {
        if (age < 18) {
            throw new ArithmeticException("Access denied - You must be at least 18 years old.");
        } else {
            System.out.println("Access granted - You are old enough.");
        }
    }

    public static void main(String[] args) {
        checkAge(15);  // This will throw an ArithmeticException
    }
}
```

## throws Keyword
The `throws` keyword is used in method signatures to declare that a method might throw one or more exceptions.

- Example
```java
import java.io.*;

public class Main {
    public static void readFile(String fileName) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(fileName));
        System.out.println(br.readLine());
        br.close();
    }

    public static void main(String[] args) {
        try {
            readFile("test.txt");
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file.");
        }
    }
}
```

# File I/O

## Introduction to File I/O
File I/O (Input/Output) in Java is used to read from and write to files. Java provides various classes in the `java.io` package for file I/O operations.

## Reading from a File
### Using FileReader and BufferedReader
```java
import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("example.txt");
            BufferedReader br = new BufferedReader(fr);
            
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            
            br.close();
            fr.close();
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file.");
        }
    }
}
```

## Writing to a File
### Using FileWriter and BufferedWriter
```java
import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("example.txt");
            BufferedWriter bw = new BufferedWriter(fw);
            
            bw.write("Hello, World!");
            bw.newLine();
            bw.write("This is a test file.");
            
            bw.close();
            fw.close();
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file.");
        }
    }
}
```

## Using File Class
The `File` class is used to represent file and directory pathnames.

- Example
```java
import java.io.File;

public class Main {
    public static void main(String[] args) {
        File file = new File("example.txt");
        
        if (file.exists()) {
            System.out.println("File exists.");
            System.out.println("File name: " + file.getName());
            System.out.println("File path: " + file.getAbsolutePath());
            System.out.println("File size: " + file.length() + " bytes");
        } else {
            System.out.println("File does not exist.");
        }
    }
}
```
# Multithreading :

# Collections Framework
The Java Collections Framework provides a set of classes and interfaces for storing and manipulating groups of objects. It includes classes like `ArrayList`, `LinkedList`, `HashSet`, `HashMap`, etc.

## List Interface
Lists are ordered collections that allow duplicate elements.

### ArrayList
An `ArrayList` is a resizable array implementation of the `List` interface.

- Example
```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        
        list.add("Alice");
        list.add("Bob");
        list.add("Charlie");
        
        System.out.println("List: " + list);
        
        list.remove("Bob");
        System.out.println("After removal: " + list);
        
        System.out.println("Element at index 1: " + list.get(1));
    }
}
```

### LinkedList
A `LinkedList` is a doubly-linked list implementation of the `List` interface.

- Example
```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        
        list.add("Alice");
        list.add("Bob");
        list.add("Charlie");
        
        System.out.println("List: " + list);
        
        list.remove("Bob");
        System.out.println("After removal: " + list);
        
        System.out.println("Element at index 1: " + list.get(1));
    }
}
```

## Set Interface
Sets are unordered collections that do not allow duplicate elements.

### HashSet
A `HashSet` is a hash table implementation of the `Set` interface.

- Example
```java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        
        set.add("Alice");
        set.add("Bob");
        set.add("Charlie");
        set.add("Alice");  // Duplicate element, will not be added
        
        System.out.println("Set: " + set);
        
        set.remove("Bob");
        System.out.println("After removal: " + set);
    }
}
```

## Map Interface
Maps are collections that map keys to values. Each key can map to at most one value.

### HashMap
A `HashMap` is a hash table implementation of the `Map` interface.

- Example
```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        
        map.put("Alice", 25);
        map.put("Bob", 30);
        map.put("Charlie", 35);
        
        System.out.println("Map: " + map);
        
        map.remove("Bob");
        System.out.println("After removal: " + map);
        
        System.out.println("Value for key 'Alice': " + map.get("Alice"));
    }
}
```

## Iterating Over Collections
You can use loops and iterators to iterate over collections.

- Example
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Alice");
        list.add("Bob");
        list.add("Charlie");
        
        // Using for-each loop
        for (String name : list) {
            System.out.println(name);
        }
        
        // Using iterator
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```

# Java Memory Management

## Introduction to Memory Management
Java memory management is the process of allocating and deallocating memory in the Java Virtual Machine (JVM). The JVM manages memory through a process called garbage collection.

## Memory Areas
### Heap
The heap is the runtime data area from which memory for all class instances and arrays is allocated. It is divided into:
- **Young Generation**: Contains short-lived objects.
- **Old Generation (Tenured)**: Contains long-lived objects.
- **Permanent Generation (PermGen)**: Contains metadata required by the JVM.

### Stack
The stack is used for storing local variables and method call frames. Each thread has its own stack.

### Method Area
The method area stores class structures such as the runtime constant pool, field and method data, and the code for methods.

### Program Counter (PC) Register
The PC register contains the address of the JVM instruction currently being executed.

### Native Method Stack
The native method stack is used for native method executions.

## Garbage Collection
Garbage collection is the process of automatically reclaiming memory by identifying and disposing of objects that are no longer needed.

### Types of Garbage Collectors
- **Serial Garbage Collector**: Uses a single thread for garbage collection.
- **Parallel Garbage Collector**: Uses multiple threads for garbage collection.
- **CMS (Concurrent Mark-Sweep) Garbage Collector**: Performs most of the garbage collection concurrently with the application.
- **G1 (Garbage-First) Garbage Collector**: Divides the heap into regions and performs garbage collection in parallel.

### Garbage Collection Phases
1. **Mark**: Identifies which objects are still in use.
2. **Sweep**: Deletes objects that are no longer in use.
3. **Compact**: Moves objects to reduce fragmentation (optional).

-  Example
```java
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 100000; i++) {
            String str = new String("Hello, World!");
        }
        
        System.gc();  // Request garbage collection
    }
}
```

## Memory Leaks
Memory leaks occur when objects are no longer needed but are still referenced, preventing the garbage collector from reclaiming their memory.

- Example
```java
import java.util.*;

public class MemoryLeakExample {
    public static List<Object> list = new ArrayList<>();

    public static void main(String[] args) {
        for (int i = 0; i < 100000; i++) {
            list.add(new Object());
        }
    }
}
```


# Java Networking

## Introduction to Networking
Java provides a rich set of classes in the `java.net` package for network programming. These classes can be used to create network applications that communicate over TCP/IP.

## URL Class
The `URL` class represents a Uniform Resource Locator, a pointer to a resource on the web.

- Example
```java
import java.net.*;

public class Main {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://www.example.com");
            System.out.println("Protocol: " + url.getProtocol());
            System.out.println("Host: " + url.getHost());
            System.out.println("Port: " + url.getPort());
            System.out.println("File: " + url.getFile());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }
}
```

## URLConnection Class
The `URLConnection` class represents a communication link between the application and the URL.

-  Example
```java
import java.net.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://www.example.com");
            URLConnection connection = url.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println(inputLine);
            }
            in.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## Socket Programming
Sockets provide a way for programs to communicate over a network.

### Creating a Server
```java
import java.net.*;
import java.io.*;

public class Server {
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(1234);
            System.out.println("Server is listening on port 1234");
            Socket socket = serverSocket.accept();
            System.out.println("Client connected");

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Received: " + inputLine);
                out.println("Echo: " + inputLine);
            }

            socket.close();
            serverSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Creating a Client
```java
import java.net.*;
import java.io.*;

public class Client {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 1234);
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in));

            String userInput;
            while ((userInput = stdIn.readLine()) != null) {
                out.println(userInput);
                System.out.println("Echo: " + in.readLine());
            }

            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

