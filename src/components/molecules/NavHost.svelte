<script lang="ts">
  import Nav from "../atoms/Nav.svelte";
  let y: number;
  import { HomeSimpleIcon } from "@indaco/svelte-iconoir/home-simple";
  import { InfoCircleIcon } from "@indaco/svelte-iconoir/info-circle";
  import { BagIcon } from "@indaco/svelte-iconoir/bag";
</script>

<nav>
  <div class:scrolled={y > 20}>
    <ul>
      <Nav href="#home" section="/" isSelected={y < 100}>
        <HomeSimpleIcon width="24" height="24" fill="var(--accent)" />
      </Nav>
      <Nav href="#about" section="about" isSelected={y >= 100 && y <= 300}>
        <InfoCircleIcon width="24" height="24" fill="var(--accent)" />
      </Nav>
      <Nav href="#work" section="work" isSelected={y > 300}>
        <BagIcon width="24" height="24" fill="var(--accent)" />
      </Nav>
    </ul>
  </div>
</nav>

<svelte:window bind:scrollY={y} />

<style lang="scss">
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    width: 100%;
    text-align: center;
    align-items: center;
    position: fixed;
    top: 0;
    padding: 1.25rem 0;
    z-index: 15;
    background-color: var(--bg-color);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    background-blend-mode: overlay;
    transition: all 0.5s ease;

    ul {
      display: flex;
      gap: 4rem;
      justify-content: center;
    }
  }
  @media (min-width: 868px) {
    div {
      width: 40rem;
      border-radius: 12px;
    }
    .scrolled {
      border-bottom: 1.5px solid var(--accent-opacity);
      padding: 0.5rem 0;
      margin-top: 0.5rem;
      width: 34rem;
      background-color: var(--elevation-five);
      box-shadow: 0px 15px 8px -10px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 868px) {
    div {
      bottom: 0;
      top: auto;
      padding: 0rem;
      background-color: var(--navbar);
    }

    div ul {
      display: flex;
      justify-content: space-evenly;
      gap: 2vw;
    }
  }
</style>
