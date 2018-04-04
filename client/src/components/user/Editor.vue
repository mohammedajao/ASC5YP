<template>
<section class="editor">
  <div class="basic-info form-container">
    <form action="">
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">
          <div class="col-sm-12">Display Name</div>
        </label>
        <div class="col-sm-8">
          <input v-model="displayName" class="form-control" placeholder="Full Name">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-4 col-form-label">
          <div class="col-sm-12">Website</div>
        </label>
        <div class="col-sm-8">
          <input v-model="website" class="form-control" placeholder="Portfolio Site Link">
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-4 col-form-label">
          <div class="col-sm-12">Description</div>
        </label>
        <div class="col-sm-8">
          <textarea v-model="description" class="form-control" rows="5"></textarea>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-4 col-form-label">
          <div class="col-sm-12">Organization</div>
        </label>
        <div class="col-sm-8">
          <input v-model="organization" class="form-control" placeholder="Organization">
        </div>
      </div>
    </form>
  </div>

  <div class="skills form-container">
    <div class="skills-heading">
      <h3>Basic Skills</h3>
      <div @click="addSkill()" class="btn-add-skill">+ Skill</div>
    </div>
    <div class="skill-list-input">
      <input v-model="skillTitle" class="sli-input form-control" placeholder="Skill Name">
      <input v-model="skillDesc" class="sli-input form-control" placeholder="Skill Tools/Specializations">
      <select v-model="skillRating" class="custom-select sli-input">
        <option disabled selected value="">Confidence Level</option>
        <option value="0.1">10%</option>
        <option value="0.2">20%</option>
        <option value="0.3">30%</option>
        <option value="0.4">40%</option>
        <option value="0.5">50%</option>
        <option value="0.6">60%</option>
        <option value="0.7">70%</option>
        <option value="0.8">80%</option>
        <option value="0.9">90%</option>
        <option value="1">100%</option>
      </select>
    </div>

    <div class="skill-list">
      <div v-for="(item, index) in skills" :key="index" class="skill-item">
        <div @click="removeSkill(index)" class="remover">x</div>
        <h4 class="skill-title">{{ item.title }}</h4>
        <p class="skill-desc">{{ item.desc }}</p>
        <p class="skill-rating">{{ (item.rating * 100) + '%' }}</p>
      </div>
    </div>
  </div>

  <div class="timeline form-container">

    <div class="skills-heading">
      <h3>Timeline</h3>
      <div  class="btn-add-skill">+ Event</div>
    </div>
    <div class="skill-list-input">
      <input v-model="eventName" class="tli-input form-control" placeholder="Event Name">
      <input v-model="eventSub" class="tli-input form-control" placeholder="Event Subtitle">
      <input v-model="eventDesc" class="tli-input form-control" placeholder="Event Description">
      <input v-model="eventLoc" class="sli-input form-control" placeholder="Event Location">
      <div class="form-group row">
        <label for="example-month-input" class="col-2 col-form-label">From</label>
        <div class="col-10">
          <input class="form-control" type="month" value="2011-08">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-month-input" class="col-2 col-form-label">To</label>
        <div class="col-10">
          <input class="form-control" type="month" value="2011-08">
        </div>
        <p class="timeline-note col-12">Note: Anything during or after the current year or month will be marked as "IN PROGRESS"</p>
      </div>
    </div>

    <div class="timeline-edit">
      <div v-for="(item, index) in timeline" :key="index" class="timeline-item">
        <div @click="removeSkill(index)" class="remover">x</div>
        <h4 class="timeline-title">{{ item.title }}</h4>
        <p class="timeline-subtitle">{{ item.subtitle }}</p>
        <p class="timeline-desc">{{ item.desc }}</p>
        <p class="timeline-location">{{ item.location }}</p>
        <p class="timeline-date-range">{{ item.range }}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data () {
    return {
      displayName: '',
      description: '',
      website: '',
      organization: '',
      skillTitle: '',
      skillDesc: '',
      skillRating: '',
      eventName: '',
      eventSub: '',
      eventDesc: '',
      eventLoc: '',
      eventRange: '',
      skills: [],
      timeline: []
    }
  },
  methods: {
    removeSkill (index) {
      this.skills.splice(index, 1);
    },
    addSkill () {
      this.skills.push({
        rating: this.skillRating,
        title: this.skillTitle,
        desc: this.skillDesc
      })
    }
  }
}
</script>

<style>
  .col-form-label {
    text-align: left;
  }

  .btn-add-skill {
    background-color: #446594;
    color: white;
    float: right;
    padding: 10px 20px;
    margin-right: 20px;
  }

  .editor .skills {
    overflow: auto;
  }

  .editor h3 {
    float: left;
  }

  .editor .sli-input, .editor .tli-input {
    margin-bottom: 10px;
  }
  .editor .skills-heading {
    height: 50px;
    margin-bottom: 50px;
  }

  .editor .skill-rating {
    color: lightgray;
    font-size: 12px;
  }
  .editor .skill-title {
    font-size: 18px;
  }

  .editor .remover {
    float: right;
    cursor: pointer;
  }

  .editor .skill-desc {
    font-size: 12px;
    margin: 0;
  }

  .editor .skill-item {
    border-bottom: 1px solid rgba(0,0,0,0.35);
    margin-bottom: 15px;
  }

  .editor .skill-item:last-child {
    border-bottom: none;
  }

  .editor .timeline-note {
    font-size: 11px;
    color: gray;
    margin: 10px auto;
  }

  .form-container {
    margin: 50px auto;
    border: 0 solid hsla(0, 0%, 100%, 0.25);
    box-shadow: 0 1px 5px #dcdcdc;
    padding: 20px;
    border-radius: 2px;
    max-width: 490px;
  }

  @media(max-width: 514px) {
    .form-container {
      margin: 50px 10px;
    }
  }
</style>
