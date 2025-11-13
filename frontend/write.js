const from = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormDataEvent(from);
  body.append("insertAt", new Date().grtTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") windowlocation.pathname = "/";
  } catch (e) {
    console.error(e);
  }
};

from.addEventListener("submit", handleSubmitForm);
