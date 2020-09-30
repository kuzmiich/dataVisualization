function skill(skill)
{
	return `<div class="skill-container">
        			<div style="flex:1;">${skill.name}</div>
        			<div class="progress-wrapper" style="margin:0 0 0 10px;flex:4;">
        				<div class="progress-line" style="background-color: ${skill.color !== null?skill.color:'#4ebdd4'};width:${skill.val}"></div>
        			</div>
        		</div>`
}

function skillsBlock(skills)
{
	return `<div class="skills_block">
		${skills.map(skill).join('')}
	</div>`
}

let skills = [
	{
		name:'JavaScript',
		val:'50%',
		color:'rgba(255,255, 0)'
	},
	{
		name:'Vue.js',
		val:'40%',
		color:'rgba(16,255,182,0.78)'
	},
	{
		name:'CSS',
		val:'70%',
		color:'rgba(6,176,255,0.64)'
	},
	{
		name:'HTML',
		val:'90%',
		color:'rgba(249,166,2)'
	},
	{
		name:'PHP',
		val:'10%',
		color:'#00008b'
	},
];

$('.skills-sections')[0].innerHTML = skillsBlock(skills);