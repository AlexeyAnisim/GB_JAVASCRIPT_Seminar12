const userData = JSON.parse(dataProducts);
            userData.forEach((element) => {
            const productEl = document.createElement("div");
            productEl.classList.add("product");

            const img = document.createElement("img");
            img.classList.add("product-img");
            img.alt = "photo";
            img.src = element.url;
            console.log(element.url);
            const productInf = document.createElement("div");
            productInf.classList.add("product-inf");

            productEl.appendChild(img);
            productEl.appendChild(productInf);
            
            const cellPValues = ["name:", "explanation:", "price:"];
            const userDataArray = Object.values(element);
            for (let i = 0; i<cellPValues.length; i++){
                
                const cell = document.createElement("div");
                cell.classList.add("cell");

                const cellP = document.createElement("p");
                cellP.textContent = cellPValues[i];

                const cellSpan = document.createElement("span");
                cellSpan.textContent = userDataArray[i];
                
                productInf.appendChild(cell);
                cell.appendChild(cellSpan);
            }
            document.querySelector(".product_box").append(productEl); 
            const clickTo = document.querySelector('#butt');
            clickTo.addEventListener("click", hideVisibleElem);
            function hideVisibleElem(){
                const boxBox = document.querySelector('.box');
                boxBox.classList.toggle("hide-element");
            }
        }            
        ); 
        
        const data = JSON.parse(dataProduct);
        data.forEach((element1) => {
                              
            const mainWrapper = document.createElement("div");
            mainWrapper.classList.add("main-wrapper");
            
            const img = document.createElement("img");
            img.classList.add("product-image");
            img.alt = "product";
            img.src = element1.url;
            console.log(element1.url);
            const productInfo = document.createElement("div");
            productInfo.classList.add("product-info");

            const h2 = document.createElement("h2");
            h2.textContent = element1.name;

            const buttonsEl = document.createElement("button");
            buttonsEl.classList.add("buttons");
            buttonsEl.textContent = "X";

            mainWrapper.appendChild(img);
            mainWrapper.appendChild(productInfo);
            productInfo.appendChild(buttonsEl);
            productInfo.appendChild(h2);

            buttonsEl.onclick = (event) => { mainWrapper.remove() };
            
                
           
            const fieldPValues = ["Price:", "Color:", "Size:", "Quantity:"];
            const dataArray = Object.values(element1);
            for (let i = 0; i < fieldPValues.length; i++) {

                const field = document.createElement("div");
                field.classList.add("field");

                const fieldP = document.createElement("p");
                fieldP.textContent = fieldPValues[i];

                const fieldSpan = document.createElement("span");
                fieldSpan.textContent = dataArray[i];
                if (i === 3) fieldSpan.classList.add("quantity-count");

                productInfo.appendChild(field);
                field.appendChild(fieldP);
                field.appendChild(fieldSpan);
            }
            document.querySelector(".hide-element").append(mainWrapper);
            
            document.getElementById("butt1").onclick = function(){
                document.getElementById("wrap").remove();
            }
                     

        }
        );