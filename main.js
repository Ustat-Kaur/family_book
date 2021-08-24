var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://image.shutterstock.com/image-vector/portrait-sikh-man-head-guy-260nw-1233792931.jpg", "https://cdn3.vectorstock.com/i/1000x1000/91/47/indian-woman-face-avatar-cartoon-vector-25919147.jpg" , "https://cdn5.vectorstock.com/i/1000x1000/91/79/indian-woman-face-avatar-cartoon-vector-25919179.jpg", "https://cdn2.vectorstock.com/i/1000x1000/03/96/indian-girl-vector-10180396.jpg"];
var names = ["Family Book","Saminder Singh", "Rajinder Kaur", "Divjot Kaur", "Ustat Kaur"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images [i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names [i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
