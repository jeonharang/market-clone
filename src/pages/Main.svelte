<script>
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
    import { getDatabase, ref, onValue } from "firebase/database";
    let hour = new Date().getHours();
    let min = new Date().getMinutes();

    $:items =[];

const db = getDatabase();
const itemsRef = ref(db, "items/");
onMount(()=>{
onValue(itemsRef, (snapshot) => {
  const data = snapshot.val();
  items=Object.values(data);
})

});
</script>

<div class="media-info-msg">화면 사이즈를 줄여주세요.</div>
    <header>
      <div class="info-bar">
        <div class="info-bar__timr">{hour}:{min}</div>
        <div class="info-bar__icons">
          <img src="assets/chart-bar.svg" alt="chart-bar" />
          <img src="assets/wifi.svg" alt="wifi" />
          <img src="assets/battery.svg" alt="battery" />
        </div>
      </div>
      <div class="menu-bar">
        <div class="menu-bar__location">
          <div>역삼1동</div>
          <div class="menu-bar__location-icon">
            <img src="assets/arrow.svg" alt="arrow-down" />
          </div>
        </div>      
        <div class="menu-bar__icons">
          <img src="assets/search.svg" alt="search" />
          <img src="assets/menu.svg" alt="menu" />
          <img src="assets/alert.svg" alt="alert" />
          </div>
      </div>
    </header>
    <main>
     {#each items as item}
     <div class="item-list">
      <div class="item-list__img" ></div>
      <div class="item-list__info">
        <div class="item-list__info-title">{item.title}</div>
        <div class="item-list__info-price">{item.price}</div>
        <div>{item.description}</div>
        <div class="item-list__info-meta">{item.place}</div>
     </div>
      </div>
     {/each}
      <a class="write-btn" href="#/write">+ 글쓰기</a>
    </main>
  <Footer location="home"/>