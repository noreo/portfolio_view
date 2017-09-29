<template>
      <Head>
        <Container>
            <div>
                <Box py={2} my={1/2}>
                        <LogoMin />
                </Box>
                <Box px={2} py={1} ml='auto'>
                    <nav>
                        <SquareBt noborders iconsize="2"><IconSound/></SquareBt>
                        <SquareBt active><IconContact/></SquareBt>
                        <SquareBt><span>FR</span></SquareBt>
                    </nav>
                </Box>
            </div>
        </Container>
    </Head>
</template>

<script>

export default {
  name: 'bye',
  data() {
    return {
      msg: 'Byeeeee la'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
