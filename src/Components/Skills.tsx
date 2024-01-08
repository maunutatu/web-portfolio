import './Skills.css'

const Skills = () => {
    return (
      <section className={'hidden skillsBlock'}>
          <h1 className={'sectionHeader'}>Skills:</h1>
          <div className={'skillSections'}>
              <div className={'skillSection'}>
                  <h2 className={'skillHeader'}>📲 Frontend 👨‍💻</h2>
                  <li>
                      Languages
                      <ul>
                          <li>
                              Javascript/Typescript
                          </li>
                          <li>
                              HTML/CSS
                          </li>
                      </ul>
                  </li>
                  <li>
                      Frameworks
                      <ul>
                          <li>
                              ReactJS
                          </li>
                          <li>
                              Three.js
                          </li>
                      </ul>
                  </li>
              </div>
              <div className={'skillSection'}>
                  <h2 className={'skillHeader'}>💾 Backend ⚒️</h2>
                  <li>
                      Languages
                      <ul>
                          <li>
                              Javascript/Typescript
                          </li>
                          <li>
                              Scala
                          </li>
                      </ul>
                  </li>
                  <li>
                      Frameworks
                      <ul>
                          <li>
                              Node.js
                          </li>
                          <li>
                              Express
                          </li>
                      </ul>
                  </li>
                  <li>
                      Databases
                      <ul>
                          <li>
                              SQL
                          </li>
                          <li>
                              MongoDB/DocumentDB
                          </li>
                      </ul>
                  </li>
              </div>
              <div className={'skillSection'}>
                  <h2 className={'skillHeader'}>☁ Cloud/AWS 🚀</h2>
                  <li>
                      Container Orchestration
                      <ul>
                          <li>
                              Docker/ECR
                          </li>
                          <li>
                              ECS/Fargate
                          </li>
                      </ul>
                  </li>
                  <li>
                      Infrastructure as Code
                      <ul>
                          <li>
                              CDK
                          </li>
                          <li>
                              Cloudformation
                          </li></ul>
                  </li>
                  <li>
                      Networking
                      <ul>
                          <li>
                              VPC Planning
                          </li>
                          <li>
                              ALB, NAT Gateways
                          </li>
                      </ul>
                  </li>
                  <li>
                      Other
                      <ul>
                          <li>
                              IAM
                          </li>
                          <li>
                              SQS
                          </li>
                          <li>
                              S3
                          </li>
                      </ul>
                  </li>
              </div>
          </div>
      </section>
    )
}

export default Skills