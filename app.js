Vue.component('project-widget', {
	props: ['title', 'description', 'url', 'img', 'externals'],
	template: `<div class="project-widget">
		<h3>{{ title }}</h3>
		<p>{{ description }}</p>
		<a v-if="url" :href="url" target="_blank">tell me more!</a>
		<div v-if="externals" style="font-size:0.8em; margin-top:0.5em">
			External tools:
			<span v-for="ext in externals">
				{{ ext }}&nbsp;&nbsp;
			</span>
		</div>
	</div>`
});


new Vue({
	el: '#app',
	data: function() {
		return {
			projects: PROJECTS,
		};
	},
	template: `<div>
		<project-widget
			v-for="project in projects"
			:key="project.id"
			:title="project.title"
			:description="project.description"
			:url="project.url"
			:img="project.img"
			:externals="project.externals"
		/>
	</div>`
});
