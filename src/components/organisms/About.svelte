<script>
	import Tooltip from '../atoms/Tooltip.svelte';
	import Discord from '../molecules/Discord.svelte';

	let getAge = () => {
		let birthDate = new Date('2004/09/24');
		const ageMs = Date.now() - birthDate.getTime();
		const preciseAge = (ageMs / 31536000000).toFixed(10);
		return preciseAge;
	};

	let age = getAge();
	setInterval(() => {
		age = getAge();
	}, 1000);
</script>

<section id="about" class="wrapper">
	<div>
		<Discord />
	</div>
	<div class="text">
		<h2>bio</h2>
		<p>
			Hey there, I'm Arlind Sulejmani!
			<br>I'm a <Tooltip tip={age}><span>{Math.floor(Number(age))}</span></Tooltip> year old IT Apprentice based in Switzerland.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
		display: grid;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.text {
		position: relative;
		line-height: 1.75rem;
	}

	span {
		font-weight: 400;
		font-family: var(--font-two);
		font-size: 0.9rem;
		background-color: var(--elevation-one);
		border-radius: 7px;
		color: var(--text-primary);
		padding: 0.2rem 0.5rem 0.2rem;
		width: fit-content;
	}

	.text::before {
		@include outlineText(
			$content: 'arlind',
			$translateX: 55%,
			$translateY: 40%,
			$fontSize: 200px,
			$opacity: 0.22
		);
	}

	h2 {
		display: none;
		margin-top: 1rem;
	}

	@media (max-width: 868px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: normal;
		}

		h2 {
			display: block;
			margin-bottom: 1rem;
		}
	}
</style>
