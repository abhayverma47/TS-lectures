# TypeScript Lectures: YouTube Series Code

Hey everyone, and welcome! This is where you'll find all the code and examples from my TypeScript YouTube series. I've set this up so you can easily follow along with the videos, experiment with the code, and build on what you've learned.

## How to Use This Code

Ready to dive in? Here’s how you can get everything running on your machine.

**1. Grab the Code**

First, clone this repository to your computer. If you have `git` installed, you can use this command in your terminal:

```bash
# Replace with your actual repository URL
git clone https://github.com/abhayverma47/TS-lectures.git
cd TS-lectures
```

**2. Install the Goodies**

Next, you'll need to install the project's dependencies. I'm using `pnpm` for this project, so just run:

```bash
pnpm install
```

This will set up TypeScript, `ts-node`, and everything else you need.

## How This Repo Is Organized

I've structured this project to be as straightforward as possible. All the code lives in the `src/topics` folder, and each lesson from the series gets its own numbered sub-folder. This way, you can easily find the code for the exact video you're watching.

```
src/
└── topics/
    ├── 00-introduction/
    │   └── index.ts
    ├── 01-getting-started/
    │   └── index.ts
    └── ...and so on!
```

## Running a Specific Topic

Want to run the code for a particular lesson? I've made it super simple. Just use the `run` script, followed by the path to the file you want to see in action.

For example, to run the code for our first lesson, you'd type this into your terminal:

```bash
pnpm run run src/topics/00-introduction/index.ts
```

## Connect With Me on YouTube

If you haven't already, come say hi on my YouTube channel! That's where all the video magic happens.

**[Abhays Syntax Studio](https://youtube.com/@abhayssyntaxstudio)**

## License

Feel free to use this code however you like. It's shared under the MIT License, which basically means you can use it for your own projects, learning, or anything else. You can read the full details in the [LICENSE](LICENSE) file.
