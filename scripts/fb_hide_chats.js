() => {
  setTimeout(() => {

    steps = [
      {
        selector: 'div[data-testid="mwchat-options-head-hover-target"]',
        click: false,
        continuation: false
      },
      {
        selector: 'i[data-visualcompletion="css-img"',
        click: true,
        continuation: true
      },
      {
        selector: 'div[role="menu"]',
        click: false,
        continuation: false
      },
      {
        selector: 'div[tabindex="0"]',
        click: true,
        continuation: true
      }
    ];

    setInterval((steps) => {

      let lastObj = document;
      for(let i = 0; i < steps.length; ++i) {
        if(steps[i].continuation === false){
          lastObj = document;
        }
        const obj = lastObj.querySelector(steps[i].selector);
        if(obj === undefined || obj === null || obj === '') {
          break;
        }
        console.log(i)
        lastObj = obj;
        if(steps[i].click){
          obj.click();
        }
      }

    }, 100, steps);
  }, 3000);
};
