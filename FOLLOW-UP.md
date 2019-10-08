# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
  Prop Types: Used it for passing props from one component to another as the eslint specified wants us to use pure function components
### Q) What's the command to start the application locally?
  Same as default, while running make sure to minize the browser to a small viewport to see the layout correctly, as its optimized only for 480 as said in the instructions.
(Default) `npm start`

---

# General:

### Q) If you had more time, what further improvements or new features would you add?
  Improve on the CSS, explore bkp library, implement tests. Functionality wise I would add a filter option and hover gestures to preview the agents website.
### Q) Which parts are you most proud of? And why?
  The whole app, because I am new to React. I am a VueJS expert, hence it took a lot of time.
### Q) Which parts did you spend the most time with? What did you find most difficult?
  Again, the whole app most of the bits took time. The most difficult was understanding the pure function component usage in React and using the bkp SASS library.
### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.
  The structure of the test is nice with the comments, the inclusion of sample images.
  Options other than React would be encouraging. Actually the wording said "like" so I was not sure if I had the freedom to use Vue or not. Example comments / usage for the SASS library.
  I think the jest snapshot feature is failing due to some dependency mismatch versions since its created using create react app.
  There might be a problem with linter not detecting the prop types.
  In App.scss since there is no property for App class itself, the class eventually loaded is "Uknown", this is very minor though.
