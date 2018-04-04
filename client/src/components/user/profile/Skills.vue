<template>
  <section id='profile-skills' class="skills">
      <div class="profile-section-header">
        <h1 class="section-title">skills</h1>
        <div v-if="skills.length == 0" class="mb-5"><em>No skills have been listed.</em></div>
        <div class="skills-container">
          <div class="row">
            <div class="skill" v-for="(item, index) in this.skills" :key="index">
              <div class="container">
                <div id="container" class="skill-container">
                  <svg height="200" viewBox="0 0 100 100" style="stroke-linecap: round;">
                    <path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#eee" stroke-width="6" fill-opacity="0"></path>
                    <path :id="'skillBar' + index" class="progress" d="M 50,50 m 0,-47 a 47,47 0 10 1 0,94 a 47,47 0 1 1 0,-94" stroke="#FFEA82" stroke-width="6" fill-opacity="0" :style="{'stroke-dasharray': '295.416, 295.416', 'stroke-dashoffset': 296 - (item.rating * 296),'d': 'path(\'M 51.5 50 m 0 -47 a 47 47 0 1 0 1 0.05\')'}"></path> 
                  </svg>
                  <p class="skill-percentage">{{ item.rating * 100 + '%'}}</p>
                </div>
              </div>
              <p class="skill-title">{{ item.title }}</p>
              <p class="skill-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      scrolled: false,
      tweenList: []//,
      // skills: [
      //   {
      //     title: 'Illustrator',
      //     desc: 'Illustration, Graphic Design, Branding, User Interface, Icon Design',
      //     rating: 0.9 // Out of 296
      //   },
      //   {
      //     title: 'Photoshop',
      //     desc: 'Illustration, Photomanipulation, Digital Painting, User Interface',
      //     rating: 0.85
      //   },
      //   {
      //     title: 'Indesign',
      //     desc: 'Corporate Identity, Editiorial Layout, Advertising Layout',
      //     rating: 0.75
      //   },
      //   {
      //     title: 'Indesign',
      //     desc: 'Corporate Identity, Editiorial Layout, Advertising Layout',
      //     rating: 0.75
      //   }
      // ]
    }
  },
  methods: {
    handleScroll (e) {
      this.scrolled = window.scrollY >= $('.skills').position().top/0.8 + $('.skills').scrollTop() - $(window).height() + $('.profile').position().top
    },
    setNum () {
      this.tweenList.map(x => {
        if (this.scrolled) {
          $('#'+x[0]).css('stroke-dashoffset', x[1])
        } else {
          $('#'+x[0]).css('stroke-dashoffset', 296)
        }
      })
    }
  },
  watch: {
    scrolled: function () {
      this.setNum()
    }
  },
  mounted () {
    var data = document.getElementsByClassName('progress')
    let ref = this.tweenList
    $('.progress').each(function () {
      ref.push([$(this).attr('id'), $(this).css('stroke-dashoffset')])
      $(this).css('stroke-dashoffset', '296')
    })
  },
  created () {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
  
}
</script>

<style>
.profile svg path.progress {
  stroke: #f197a3;
  transition: .5s ease;
}

.profile .section-title {
  text-transform: uppercase;
  margin-bottom: 50px;
}

.profile .basic-info-item {
  margin-bottom: 40px;
}

.profile .skills {
  background-color: white;
  overflow: auto;
}

.profile .skill {
  margin: 0 auto;
  position: relative;
}

.profile .skill {
  max-width: 230px;
  margin-bottom: 50px;
}

.profile .skills-container {
  max-width: 800px;
  margin: 0 auto;
}

.profile .skill-container {
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  position: relative;
}

.profile .skills .skill-title {
  color: #f197a3;
  text-transform: uppercase;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 0;
}

.profile .skills .skill-percentage {
  color: #604f6f;
  font-size: 38px;
  position: absolute;
  transform: translateX(70%);
}

.profile .skills .skill-desc {
  font-family: 'Open Sans';
  color: #604f6f;
  white-space:normal;
  font-size: 0.8em;
  margin: 0 auto;
}
</style>
