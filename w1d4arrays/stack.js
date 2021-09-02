  "use strict";



  function checkBalance(curly) {

      const stack = [];
      for (let bracket of curly) {
          if (bracket === "{") {
              stack.push(bracket);
          } else {
              //   if right then pop and check value is left
              const popBracket = stack.pop();
              if (
                  if (popBracket === "{") {
                      continue;
                  } else {
                      return false;
                  }
              }

          }
          if (stack.length === 0) {
              return true;
          } else {
              return false;
          }
          console.log(checkBalance(curly));