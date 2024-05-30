<script>
  import Tooltip from "../atoms/Tooltip.svelte";
  import Socials from "./Socials.svelte";
</script>

<hr />
<footer class="wrapper">
  <Socials />
  <h6>
    <Tooltip tip="See in GitHub!"
      ><a
        href="https://github.com/Arlind-dev/sulej.ch"
        target="_blank"
        rel="noreferrer">v0.5.1</a
      ></Tooltip
    >
  </h6>
</footer>

<style lang="scss">
  hr {
    background-color: var(--elevation-one);
    height: 1px;
    border: 0;
    width: 100%;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }

  footer {
    padding-bottom: 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  h6 {
    text-align: center;
    line-height: 2.5rem;
    margin-top: 0;
  }

  a {
    transition: 0.3s var(--bezier-one);
    font-family: var(--font-two);
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 0.9rem;
    border-radius: 7px;
    padding: 0.15rem 0.5rem 0.15rem;

    &:hover {
      font-weight: 400;
      background-color: var(--accent);
      color: var(--elevation-one);
      border-radius: 7px;
      width: fit-content;
    }
  }
</style>
