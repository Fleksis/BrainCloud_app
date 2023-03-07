<template>
  <div class="container">
    <div class="navigation">
      <HelpNavigationHeader title="Admin"/>
      <HelpNavigationHeader title="Register"/>
      <HelpNavigationHeader title="Login"/>
    </div>
    <div class="instructions">
      <HelpInstructionBox
        title="Mapītes"
        description="Mapītes parasti izmanto, lai sagrupētu failus, bet priekš mums mapītes ir vajadzīgas, lai var augšupielādēt failus. Mapītes ir veids, kā var organizēt failus ar opcijām pārsaukt mapītes un izveidot līdz pat 20 mapītēm."
      />
      <HelpInstructionBox
        title="Izveidot mapīti"
        :steps="[
          'Lai izveidotu mapīti, Jums vajag nospeist pogu ‘Create Folder’.',
          'Maz lodziņš parādīsies zem ‘Create Folder’ pogas, kur parsīs ievadīt mapītes nosaukumu. Lai apstiprinātu mapītes izveidošanu, nospiežat pogu ‘Create’.',
        ]"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'help',
  layout: 'NotUserNavigationBar',
  auth: false
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  width: 70%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  gap: 100px;
}

.navigation {
  width: fit-content;
  color: white;
  font-family: Alata;
}

.navigation > h2 {
  cursor: pointer;
  transition: 0.2s;
}

.navigation > h2:hover {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>
