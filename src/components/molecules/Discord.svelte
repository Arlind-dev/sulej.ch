<script lang="ts">
  import { user } from "../../util/discord";

  let discordUser = `@${user.username}`,
    discordUserImage = "discord.png",
    state: string,
    smallImage: string;

  function localTime() {
    state = new Date().toLocaleTimeString("en-US", {
      timeZone: "Europe/Zurich",
      hour12: false,
    });
  }

  localTime();
  setInterval(() => localTime(), 1000);
</script>

<h2>discord</h2>
<div class="contain">
  <img src={discordUserImage} alt={discordUser} class="big" />
  {#if smallImage}
    <img src={smallImage} alt={discordUser} class="small" />
  {/if}
  <div>
    <h3>{discordUser}</h3>
    <h5>{state || ""}</h5>
  </div>
</div>

<style lang="scss">
  .contain {
    display: flex;
    gap: 2.25rem;
    align-items: center;
  }

  h2 {
    display: none;
  }

  .big {
    height: 135px;
    width: 135px;
    border-radius: 20px;
    display: relative;
    user-select: none;
    transition: all 0.3s var(--bezier-one);
  }

  .small {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: absolute;
    transform: translate(275%, 150%);
    outline: 6px solid var(--bg-color);
    background-color: var(--bg-color);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 868px) {
    h2 {
      display: block;
      margin-bottom: 1rem;
    }
    div {
      justify-content: left;
    }

    .big {
      height: 100px;
      width: 100px;
      border-radius: 17px;
    }
  }
</style>
