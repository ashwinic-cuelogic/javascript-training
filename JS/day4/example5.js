<ul id="list">
<li>one</li>
<li>two</li>
<li>three</li>
<li>four</li>
<li>five</li>
</ul>

<script type="text/javascript">

var list = document.getElementById('list');

list.addEventListener('click',function(e){
    alert(e.target.innerHTML);
});
</script>
