//a.
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }

//b.
  async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }


//c.
messages()

export{messages};
