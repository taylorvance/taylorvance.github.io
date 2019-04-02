Vue.component('project-widget', {
	props: ['title', 'description', 'url', 'img', 'externals'],
	template: `<div>
		<h3><a :href="url" target="_blank">{{ title }}</a></h3>
		<p style="text-align:justify">{{ description }}</p>
		<a v-if="img" :href="url" target="_blank">
			<img :src="img" style="border:1px solid #ddd; max-width:100%; max-height:10em;" :title="title" :alt="title"/>
		</a>
		<p v-if="externals">
			<div v-for="ext in externals" style="font-size:0.7em">
				<a :href="ext.url" target="_blank">
					{{ ext.name }}
				</a>
			</div>
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
	template: `<div>
		<h3><a :href="url" target="_blank">{{ album }}</a></h3>
		<p style="text-align:justify">{{ description }}</p>
		<iframe style="border:0; width:100%; height:300px;" :src="iframeSrc" seamless>
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
					description: "The Dragon Emperor & His Largest Army's self-titled album tells the story of a cosmic trickster whose goal is to conquer worlds and transform populations into mindless soldiers. It consists of ten vignettes, each telling a different story about the Dragon Emperor’s journey -- and the devastation wrought on the planets in his path.",
					url: "https://dragonemperor.bandcamp.com/album/the-dragon-emperor-his-largest-army",
					albumId: "3282846906",
				},
				{
					album: "CURI/OSITY",
					description: "CURI/OSITY is a post-apocalyptic tale about human hubris and robotic nonconformity.",
					url: "https://dragonemperor.bandcamp.com/album/curi-osity",
					albumId: "3599526398",
				},
				{
					album: "HUMANe",
					description: "HUMANe is something we conceived, wrote, and produced in one night in 11th grade. It portrays the lives of a herd of animals and the humans who hunt them.",
					url: "https://theshynessclinic.bandcamp.com/album/humane",
					albumId: "2714321413",
				},
			],
		};
	},
});
