Vue.component('project-widget', {
	props: ['title', 'description', 'url', 'img', 'externals'],
	template: `<div class="widget">
		<h3>
			<a :href="url" target="_blank">{{ title }}</a>
		</h3>
		<p style="text-align:justify">{{ description }}</p>
		<a v-if="img" :href="url" target="_blank">
			<img :src="img" style="max-width:100%; max-height:10em;"/>
		</a>
		<p v-if="externals" style="font-size:0.8em; font-style:italic;">
			Externals:
			<span v-for="ext in externals">
				&nbsp;&nbsp;
				<a :href="ext.url" target="_blank">
					{{ ext.name }}
				</a>
			</span>
		</p>
	</div>`
});

Vue.component('bandcamp-widget', {
	props: ['album', 'description', 'url', 'albumId'],
	computed: {
		iframeSrc: function(){
			return "https://bandcamp.com/EmbeddedPlayer/album=" + this.albumId + "/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
		},
	},
	template: `<div class="widget">
		<h3>
			<a :href="url" target="_blank">{{ album }}</a>
		</h3>
		<p style="text-align:justify">{{ description }}</p>
		<iframe style="border:0; width:100%; height:350px;" :src="iframeSrc" seamless>
			<a :href="url">{{ album }}</a>
		</iframe>
	</div>`
});


new Vue({
	el: '#app',
	data: function() {
		return {
			projects: PROJECTS,
			albums: [
				{
					album: "The Dragon Emperor & His Largest Army",
					description: "The Dragon Emperor & His Largest Army's self-titled album tells the story of the Dragon Emperor, a cosmic trickster whose goal is to conquer worlds and transform populations into mindless soldiers. It consists of ten vignettes, each telling a different story about the Dragon Emperor’s journey--and the devastation wrought on the planets in his path.",
					url: "https://dragonemperor.bandcamp.com/album/the-dragon-emperor-his-largest-army",
					albumId: "3282846906",
				},
				{
					album: "CURI/OSITY",
					description: "",
					url: "https://dragonemperor.bandcamp.com/album/curi-osity",
					albumId: "3599526398",
				},
				{
					album: "HUMANe",
					description: "HUMANe is something we conceived, wrote, and produced in one night in 11th grade.",
					url: "https://theshynessclinic.bandcamp.com/album/humane",
					albumId: "2714321413",
				},
			],
		};
	},
});
