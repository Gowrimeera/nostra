var cancel = document.getElementById("Cancel");
var head1 = document.querySelector(".head1")

cancel.addEventListener('click',function(){
   head1.style.display = "none"  
})


var filterList =[]
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }
    })
}) 



function update()
{
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}
const menuButton = document.getElementById('menu');
const navigationList = document.querySelector('.head2-1');


menuButton.addEventListener('click', () => {
  navigationList.classList.toggle('active');
});

document.querySelectorAll('.head2-1 a').forEach((link) => {
  link.addEventListener('click', () => {
    navigationList.classList.remove('active');
  });
});
