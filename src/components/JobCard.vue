<template>
  <div class="card">
    <div class="card-body d-flex justify-content-between align-items-center">
      <h5>{{job.jobTitle}} {{job.company}}</h5>
      <div class="align-items-center d-flex gap-2">
        <img :src="seller.picture" :alt="seller.name" :title="seller.name" height="30" class="rounded">
        <i class="mdi mdi-delete-forever fs-4 selectable rounded" @click.stop="$emit('deleteClassified')"
          v-if="account.id == seller.id"></i>
      </div>
    </div>
  </div>
</template>


<script>
import { Job } from '../models/Job.js';
import { SellerProfile } from '../models/SellerProfile.js';

export default {
  props: {
    job: { type: Job, required: true },
    seller: { type: SellerProfile, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>