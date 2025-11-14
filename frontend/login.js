const form = document.querySelector("#loginForm");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256password = sha256(formData.get("password"));
  formData.set("password", sha256password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();

  if (res.status === 200) {
    alert("로그인에 성공하였습니다");
    window.location.pathname = "/";
  } else if (res.status === 401) {
    alert("id혹은password가 틀렸습니다");
  }
};

form.addEventListener("submit", handleSubmit);
