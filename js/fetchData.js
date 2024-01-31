const alertText = document.querySelector(".form__alert-text");
const alertBtn = document.querySelector(".form__alert-btn");
const loader = document.querySelector(".loading-wrap");

export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://carnelian-ultra-tarascosaurus.glitch.me/api"
    );
    if (!response.ok) {
      alertText.innerHTML = `Ошибка сервера. ${response.status}`;
      loader.style.display = "none";
      alertBtn.style.display = "block";
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    alertText.innerHTML = `Ошибка при получении данных: ${error}`;
    loader.style.display = "none";
    alertBtn.style.display = "block";
    console.error(`Ошибка при получении данных: ${error}`);
  }
};
