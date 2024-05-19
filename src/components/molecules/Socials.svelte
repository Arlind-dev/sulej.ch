<script>
	import Social from '../atoms/Social.svelte';
	import { user } from '../../util/discord';

	import { GitHubIcon } from '@indaco/svelte-iconoir/github';
	import { DiscordIcon } from '@indaco/svelte-iconoir/discord';
	import { LinkedInIcon } from '@indaco/svelte-iconoir/linkedin';
	import { MailIcon } from '@indaco/svelte-iconoir/mail';
</script>

<div class="socials-container">
	<Social tip="Arlind-dev" link="https://github.com/arlind-dev">
		<GitHubIcon color="var(--accent)" />
	</Social>

	<Social tip={user.username} link={`https://discord.com/users/${user.id}`}>
		<DiscordIcon color="var(--accent)" />
	</Social>

	<Social tip="Arlind Sulejmani" link="https://www.linkedin.com/in/arlind-sulejmani/">
		<LinkedInIcon color="var(--accent)" />
	</Social>

	<Social tip="arlind@sulej.ch" link="mailto:arlind@sulej.ch">
		<MailIcon color="var(--accent)" />
	</Social>

</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>
