<template>
	<form action="">
		<label for="">
			<span>用户名: </span><input type="text" placeholder="enter your name">
		</label>
		<label for="">
			<span>密码: </span><input type="text" placeholder="enter your pwd">
		</label>
		<button>login</button>
	</form>
</template>

<style>
	label{
		display: block;
		width: 50%;
		margin: 20px auto;
		text-align: left;
	}
	button{
		width: 100px; padding: 10px 20px; border-radius: 4px; outline: none;
	}
</style>