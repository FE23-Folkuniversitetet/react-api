import {useState} from "react";

export function FetchData(){
const URL ="https://api.github.com/users/timmywheels/repos";

const [data, setData] = useState([]);

useState(() => {

fetch(URL)
.then((resp) => resp.json())
.then((data) => {
	setData(data);
	console.log(data);
});
}, []);


	return(
<section>
	<h2>Mina projekt</h2>
	{data.map((repo) => (
<article key={repo.id}>
<a href={repo.html_url}>
	<h3>{repo.name}</h3>

</a>
</article>

	))}
</section>

	)
};