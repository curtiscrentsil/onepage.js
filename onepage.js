/*
 _________   _____     ___    __________
|   ___  |  |     \   |  |   |     ____|
|  |  |  |  |      \  |  |   |    |______
|  |  |  |  |  | \  \ |  |   |     _____|
|  |__|  |  |  |  \  \|  |   |    |______
|________|  |__|   \_____|   |__________|page .js

i TRIED MY BEST 😅

Creator Curtis Crentsil
Instagram: Curtis Crentsil
Gmail: curtiscrentsil0@gmail.com
StackOveflow: Curtis Crentsil

*******************************DOCUMENTATION OF THIS API
Welcome to onepage.js, this api is used to make you webpage act like a react, vue or angular aplication, allowing your webpage to not refresh when you redirect to a new page.

-------THIS IS HOW TO USE IT:
download this file and link it to all the pages in  your website, or copy the link and link it to all the pages in your website. 

---DOWNLOAD THE .HTACCESS FILE AND PUT IT IN THE ROOT OF YOUR PROJECT OR SOME FUNCTIONALITIES MIGHT NOT WORK---

on any tag at all if you want to link to another page, type <Tagname onclick = "goto('pagename.html')"><Tagname/>
if you want to change the color of the loader, on any page you want to use this api type <COLOR title="color"/>

*/

var loader_color = "";
// linking jquery to the site
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

// creating the dark background
var back = document.createElement("div");
back.style.width = "100%";
back.style.height = "100vw";
back.style.position = "absolute";
back.style.top = "0";
back.style.background = "#00000063";
back.style.display = "none";
document.body.appendChild(back);

//creating the loading thing
var loading = document.createElement("div");
loading.style.width = "1%";
loading.style.height = "2px";
loading.style.position = "absolute";
loading.style.top = "0";

// if the loader color is not set make make it white
if (loader_color == "") {
  loading.style.background = "#fff";
} else {
  loading.style.background = loader_color;
  //   localStorage.setItem('loader_color')
}
loading.style.display = "none";

document.body.appendChild(loading);

// the goto function
function goto(name_of_page) {
  back.style.display = "inherit";
  loading.style.display = "inherit";

  // go get the page and paste it on the current page
  var request = new XMLHttpRequest();
  request.open("GET", name_of_page, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText;

      var link = name_of_page.split("."); // slpit the link so i can get the name of that particular page sepretely
      var name = link[0]; // getting the name of the page
      // document.write(resp)
      // $("body").load(`${name_of_page}`); // loading the page into the first page

      // if the website is on a sever remove the extention
      if (
        location.href.includes("localhost") ||
        location.href.includes("www")
      ) {
        window.history.pushState(name_of_page, "Title", name);
        console.log("has http");
        console.log(location.href);
      } else {
        window.history.pushState(name_of_page, "Title", name_of_page);
        console.log("does not have http");
      }

      // get the new page's title and replace it with the previous title
      const tpl = document.createElement("template");
      tpl.innerHTML = resp;
      // replacing the title here
      document.title = tpl.content.querySelector("title").textContent;
    }
  };

  request.send();
  // pretending to send and info mation to a sever so that the loader can load
  var formdata = new FormData();
  formdata.append("song", fileload);

  // to load the loader
  const xhr = new XMLHttpRequest();
  xhr.open("POST", name_of_page);
  xhr.upload.addEventListener("progress", e => {
    const percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
    loading.style.width = percent.toFixed(2) + "%";
  });

  xhr.send(formdata);
}

window.addEventListener("popstate", function() {
  var new_location = location.pathname.split("/")[1];
  goto(new_location);
});

// the file that is pretending to load
var fileload =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo culpa dicta aliquam maiores veniam? Nobis expedita impedit ipsum reiciendis magnam pariatur incidunt laudantium, vel iste sed eaque inventore. Culpa saepe consequatur similique quia, earum expedita quos itaque cumque eius iste in, quaerat mollitia consectetur aspernatur sit est deleniti voluptate laudantium. Iste dignissimos, perspiciatis eaque earum in, laborum, molestias velit alias maxime tenetur quam ullam quidem libero. Odit nostrum vitae temporibus aliquid beatae id facere repellendus repellat. Veniam, reprehenderit saepe recusandae, enim quasi delectus voluptatum corporis perspiciatis, harum totam odit hic illo deleniti iure maxime? Aperiam hic neque voluptas cumque quasi?";
