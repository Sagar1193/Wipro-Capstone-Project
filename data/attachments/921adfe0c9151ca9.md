# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: recruitment/recruitment.spec.js >> Recruitment Module Tests >> Verify Recruitment Page Loaded
- Location: tests/recruitment/recruitment.spec.js:8:3

# Error details

```
TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/recruitment/viewRecruitmentModule" until "load"
  navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Recruitment" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Geeta Ranote
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - link "Candidates" [ref=e133]:
              - /url: "#"
          - listitem [ref=e134] [cursor=pointer]:
            - link "Vacancies" [ref=e135]:
              - /url: "#"
          - button "" [ref=e137] [cursor=pointer]:
            - generic [ref=e138]: 
  - generic [ref=e139]:
    - generic [ref=e141]:
      - generic [ref=e142]:
        - generic [ref=e143]:
          - heading "Candidates" [level=5] [ref=e145]
          - button "" [ref=e148] [cursor=pointer]:
            - generic [ref=e149]: 
        - separator [ref=e150]
        - generic [ref=e152]:
          - generic [ref=e154]:
            - generic [ref=e156]:
              - generic [ref=e158]: Job Title
              - generic [ref=e161] [cursor=pointer]:
                - generic [ref=e162]: "-- Select --"
                - generic [ref=e164]: 
            - generic [ref=e166]:
              - generic [ref=e168]: Vacancy
              - generic [ref=e171] [cursor=pointer]:
                - generic [ref=e172]: "-- Select --"
                - generic [ref=e174]: 
            - generic [ref=e176]:
              - generic [ref=e178]: Hiring Manager
              - generic [ref=e181] [cursor=pointer]:
                - generic [ref=e182]: "-- Select --"
                - generic [ref=e184]: 
            - generic [ref=e186]:
              - generic [ref=e188]: Status
              - generic [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: "-- Select --"
                - generic [ref=e194]: 
          - generic [ref=e196]:
            - generic [ref=e198]:
              - generic [ref=e200]: Candidate Name
              - textbox "Type for hints..." [ref=e204]
            - generic [ref=e206]:
              - generic [ref=e208]: Keywords
              - textbox "Enter comma seperated words..." [ref=e210]
            - generic [ref=e212]:
              - generic [ref=e214]: Date of Application
              - generic [ref=e217]:
                - textbox "From" [ref=e218]
                - generic [ref=e219] [cursor=pointer]: 
            - generic [ref=e226]:
              - textbox "To" [ref=e227]
              - generic [ref=e228] [cursor=pointer]: 
          - generic [ref=e232]:
            - generic [ref=e234]: Method of Application
            - generic [ref=e237] [cursor=pointer]:
              - generic [ref=e238]: "-- Select --"
              - generic [ref=e240]: 
          - separator [ref=e241]
          - generic [ref=e242]:
            - button "Reset" [ref=e243] [cursor=pointer]
            - button "Search" [ref=e244] [cursor=pointer]
      - generic [ref=e245]:
        - button " Add" [ref=e247] [cursor=pointer]:
          - generic [ref=e248]: 
          - text: Add
        - generic [ref=e249]:
          - separator [ref=e250]
          - generic [ref=e252]: (61) Records Found
        - table [ref=e254]:
          - rowgroup [ref=e255]:
            - row " Vacancy  Candidate  Hiring Manager  Date of Application  Status  Actions" [ref=e256]:
              - columnheader "" [ref=e257]:
                - generic [ref=e259] [cursor=pointer]:
                  - checkbox "" [ref=e260]
                  - generic [ref=e262]: 
              - columnheader "Vacancy " [ref=e263]:
                - text: Vacancy
                - generic [ref=e264]:
                  - generic [ref=e265] [cursor=pointer]: 
                  - text:  
              - columnheader "Candidate " [ref=e266]:
                - text: Candidate
                - generic [ref=e267]:
                  - generic [ref=e268] [cursor=pointer]: 
                  - text:  
              - columnheader "Hiring Manager " [ref=e269]:
                - text: Hiring Manager
                - generic [ref=e270]:
                  - generic [ref=e271] [cursor=pointer]: 
                  - text:  
              - columnheader "Date of Application " [ref=e272]:
                - text: Date of Application
                - generic [ref=e273]:
                  - generic [ref=e274] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=e275]:
                - text: Status
                - generic [ref=e276]:
                  - generic [ref=e277] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e278]
          - rowgroup [ref=e279]:
            - row " Payroll Administrator testing automation task Geeta Ranote 2026-01-06 Application Initiated  " [ref=e281]:
              - cell "" [ref=e282]:
                - generic [ref=e285] [cursor=pointer]:
                  - checkbox "" [ref=e286]
                  - generic [ref=e288]: 
              - cell "Payroll Administrator" [ref=e289]:
                - generic [ref=e290]: Payroll Administrator
              - cell "testing automation task" [ref=e291]:
                - generic [ref=e292]: testing automation task
              - cell "Geeta Ranote" [ref=e293]:
                - generic [ref=e294]: Geeta Ranote
              - cell "2026-01-06" [ref=e295]:
                - generic [ref=e296]: 2026-01-06
              - cell "Application Initiated" [ref=e297]:
                - generic [ref=e298]: Application Initiated
              - cell " " [ref=e299]:
                - generic [ref=e300]:
                  - button "" [ref=e301] [cursor=pointer]:
                    - generic [ref=e302]: 
                  - button "" [ref=e303] [cursor=pointer]:
                    - generic [ref=e304]: 
            - row " Tanmay Anderson O'Keefe (Deleted) 2024-29-03  " [ref=e306]:
              - cell "" [ref=e307]:
                - generic [ref=e310] [cursor=pointer]:
                  - checkbox "" [ref=e311]
                  - generic [ref=e313]: 
              - cell [ref=e314]
              - cell "Tanmay Anderson O'Keefe" [ref=e315]:
                - generic [ref=e316]: Tanmay Anderson O'Keefe
              - cell "(Deleted)" [ref=e317]:
                - generic [ref=e318]: (Deleted)
              - cell "2024-29-03" [ref=e319]:
                - generic [ref=e320]: 2024-29-03
              - cell [ref=e321]
              - cell " " [ref=e322]:
                - generic [ref=e323]:
                  - button "" [ref=e324] [cursor=pointer]:
                    - generic [ref=e325]: 
                  - button "" [ref=e326] [cursor=pointer]:
                    - generic [ref=e327]: 
            - row " Tanmay sree Dachu (Deleted) 2024-06-02   " [ref=e329]:
              - cell "" [ref=e330]:
                - generic [ref=e333] [cursor=pointer]:
                  - checkbox "" [ref=e334]
                  - generic [ref=e336]: 
              - cell [ref=e337]
              - cell "Tanmay sree Dachu" [ref=e338]:
                - generic [ref=e339]: Tanmay sree Dachu
              - cell "(Deleted)" [ref=e340]:
                - generic [ref=e341]: (Deleted)
              - cell "2024-06-02" [ref=e342]:
                - generic [ref=e343]: 2024-06-02
              - cell [ref=e344]
              - cell "  " [ref=e345]:
                - generic [ref=e346]:
                  - button "" [ref=e347] [cursor=pointer]:
                    - generic [ref=e348]: 
                  - button "" [ref=e349] [cursor=pointer]:
                    - generic [ref=e350]: 
                  - button "" [ref=e351] [cursor=pointer]:
                    - generic [ref=e352]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e354]:
              - cell "" [ref=e355]:
                - generic [ref=e358] [cursor=pointer]:
                  - checkbox "" [ref=e359]
                  - generic [ref=e361]: 
              - cell "Senior QA Lead" [ref=e362]:
                - generic [ref=e363]: Senior QA Lead
              - cell "John Doe" [ref=e364]:
                - generic [ref=e365]: John Doe
              - cell "(Deleted)" [ref=e366]:
                - generic [ref=e367]: (Deleted)
              - cell "2024-06-02" [ref=e368]:
                - generic [ref=e369]: 2024-06-02
              - cell "Shortlisted" [ref=e370]:
                - generic [ref=e371]: Shortlisted
              - cell "  " [ref=e372]:
                - generic [ref=e373]:
                  - button "" [ref=e374] [cursor=pointer]:
                    - generic [ref=e375]: 
                  - button "" [ref=e376] [cursor=pointer]:
                    - generic [ref=e377]: 
                  - button "" [ref=e378] [cursor=pointer]:
                    - generic [ref=e379]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e381]:
              - cell "" [ref=e382]:
                - generic [ref=e385] [cursor=pointer]:
                  - checkbox "" [ref=e386]
                  - generic [ref=e388]: 
              - cell "Senior QA Lead" [ref=e389]:
                - generic [ref=e390]: Senior QA Lead
              - cell "John Doe" [ref=e391]:
                - generic [ref=e392]: John Doe
              - cell "(Deleted)" [ref=e393]:
                - generic [ref=e394]: (Deleted)
              - cell "2024-06-02" [ref=e395]:
                - generic [ref=e396]: 2024-06-02
              - cell "Shortlisted" [ref=e397]:
                - generic [ref=e398]: Shortlisted
              - cell "  " [ref=e399]:
                - generic [ref=e400]:
                  - button "" [ref=e401] [cursor=pointer]:
                    - generic [ref=e402]: 
                  - button "" [ref=e403] [cursor=pointer]:
                    - generic [ref=e404]: 
                  - button "" [ref=e405] [cursor=pointer]:
                    - generic [ref=e406]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e408]:
              - cell "" [ref=e409]:
                - generic [ref=e412] [cursor=pointer]:
                  - checkbox "" [ref=e413]
                  - generic [ref=e415]: 
              - cell "Senior QA Lead" [ref=e416]:
                - generic [ref=e417]: Senior QA Lead
              - cell "John Doe" [ref=e418]:
                - generic [ref=e419]: John Doe
              - cell "(Deleted)" [ref=e420]:
                - generic [ref=e421]: (Deleted)
              - cell "2024-06-02" [ref=e422]:
                - generic [ref=e423]: 2024-06-02
              - cell "Shortlisted" [ref=e424]:
                - generic [ref=e425]: Shortlisted
              - cell "  " [ref=e426]:
                - generic [ref=e427]:
                  - button "" [ref=e428] [cursor=pointer]:
                    - generic [ref=e429]: 
                  - button "" [ref=e430] [cursor=pointer]:
                    - generic [ref=e431]: 
                  - button "" [ref=e432] [cursor=pointer]:
                    - generic [ref=e433]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e435]:
              - cell "" [ref=e436]:
                - generic [ref=e439] [cursor=pointer]:
                  - checkbox "" [ref=e440]
                  - generic [ref=e442]: 
              - cell "Senior QA Lead" [ref=e443]:
                - generic [ref=e444]: Senior QA Lead
              - cell "John Doe" [ref=e445]:
                - generic [ref=e446]: John Doe
              - cell "(Deleted)" [ref=e447]:
                - generic [ref=e448]: (Deleted)
              - cell "2024-06-02" [ref=e449]:
                - generic [ref=e450]: 2024-06-02
              - cell "Shortlisted" [ref=e451]:
                - generic [ref=e452]: Shortlisted
              - cell "  " [ref=e453]:
                - generic [ref=e454]:
                  - button "" [ref=e455] [cursor=pointer]:
                    - generic [ref=e456]: 
                  - button "" [ref=e457] [cursor=pointer]:
                    - generic [ref=e458]: 
                  - button "" [ref=e459] [cursor=pointer]:
                    - generic [ref=e460]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e462]:
              - cell "" [ref=e463]:
                - generic [ref=e466] [cursor=pointer]:
                  - checkbox "" [ref=e467]
                  - generic [ref=e469]: 
              - cell "Senior QA Lead" [ref=e470]:
                - generic [ref=e471]: Senior QA Lead
              - cell "John Doe" [ref=e472]:
                - generic [ref=e473]: John Doe
              - cell "(Deleted)" [ref=e474]:
                - generic [ref=e475]: (Deleted)
              - cell "2024-06-02" [ref=e476]:
                - generic [ref=e477]: 2024-06-02
              - cell "Shortlisted" [ref=e478]:
                - generic [ref=e479]: Shortlisted
              - cell "  " [ref=e480]:
                - generic [ref=e481]:
                  - button "" [ref=e482] [cursor=pointer]:
                    - generic [ref=e483]: 
                  - button "" [ref=e484] [cursor=pointer]:
                    - generic [ref=e485]: 
                  - button "" [ref=e486] [cursor=pointer]:
                    - generic [ref=e487]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e489]:
              - cell "" [ref=e490]:
                - generic [ref=e493] [cursor=pointer]:
                  - checkbox "" [ref=e494]
                  - generic [ref=e496]: 
              - cell "Senior QA Lead" [ref=e497]:
                - generic [ref=e498]: Senior QA Lead
              - cell "John Doe" [ref=e499]:
                - generic [ref=e500]: John Doe
              - cell "(Deleted)" [ref=e501]:
                - generic [ref=e502]: (Deleted)
              - cell "2024-06-02" [ref=e503]:
                - generic [ref=e504]: 2024-06-02
              - cell "Shortlisted" [ref=e505]:
                - generic [ref=e506]: Shortlisted
              - cell "  " [ref=e507]:
                - generic [ref=e508]:
                  - button "" [ref=e509] [cursor=pointer]:
                    - generic [ref=e510]: 
                  - button "" [ref=e511] [cursor=pointer]:
                    - generic [ref=e512]: 
                  - button "" [ref=e513] [cursor=pointer]:
                    - generic [ref=e514]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Rejected   " [ref=e516]:
              - cell "" [ref=e517]:
                - generic [ref=e520] [cursor=pointer]:
                  - checkbox "" [ref=e521]
                  - generic [ref=e523]: 
              - cell "Senior QA Lead" [ref=e524]:
                - generic [ref=e525]: Senior QA Lead
              - cell "John Doe" [ref=e526]:
                - generic [ref=e527]: John Doe
              - cell "(Deleted)" [ref=e528]:
                - generic [ref=e529]: (Deleted)
              - cell "2024-06-02" [ref=e530]:
                - generic [ref=e531]: 2024-06-02
              - cell "Rejected" [ref=e532]:
                - generic [ref=e533]: Rejected
              - cell "  " [ref=e534]:
                - generic [ref=e535]:
                  - button "" [ref=e536] [cursor=pointer]:
                    - generic [ref=e537]: 
                  - button "" [ref=e538] [cursor=pointer]:
                    - generic [ref=e539]: 
                  - button "" [ref=e540] [cursor=pointer]:
                    - generic [ref=e541]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e543]:
              - cell "" [ref=e544]:
                - generic [ref=e547] [cursor=pointer]:
                  - checkbox "" [ref=e548]
                  - generic [ref=e550]: 
              - cell "Senior QA Lead" [ref=e551]:
                - generic [ref=e552]: Senior QA Lead
              - cell "John Doe" [ref=e553]:
                - generic [ref=e554]: John Doe
              - cell "(Deleted)" [ref=e555]:
                - generic [ref=e556]: (Deleted)
              - cell "2024-06-02" [ref=e557]:
                - generic [ref=e558]: 2024-06-02
              - cell "Shortlisted" [ref=e559]:
                - generic [ref=e560]: Shortlisted
              - cell "  " [ref=e561]:
                - generic [ref=e562]:
                  - button "" [ref=e563] [cursor=pointer]:
                    - generic [ref=e564]: 
                  - button "" [ref=e565] [cursor=pointer]:
                    - generic [ref=e566]: 
                  - button "" [ref=e567] [cursor=pointer]:
                    - generic [ref=e568]: 
            - row " Manu K M (Deleted) 2024-06-02  " [ref=e570]:
              - cell "" [ref=e571]:
                - generic [ref=e574] [cursor=pointer]:
                  - checkbox "" [ref=e575]
                  - generic [ref=e577]: 
              - cell [ref=e578]
              - cell "Manu K M" [ref=e579]:
                - generic [ref=e580]: Manu K M
              - cell "(Deleted)" [ref=e581]:
                - generic [ref=e582]: (Deleted)
              - cell "2024-06-02" [ref=e583]:
                - generic [ref=e584]: 2024-06-02
              - cell [ref=e585]
              - cell " " [ref=e586]:
                - generic [ref=e587]:
                  - button "" [ref=e588] [cursor=pointer]:
                    - generic [ref=e589]: 
                  - button "" [ref=e590] [cursor=pointer]:
                    - generic [ref=e591]: 
            - row " Manu K M (Deleted) 2024-06-02  " [ref=e593]:
              - cell "" [ref=e594]:
                - generic [ref=e597] [cursor=pointer]:
                  - checkbox "" [ref=e598]
                  - generic [ref=e600]: 
              - cell [ref=e601]
              - cell "Manu K M" [ref=e602]:
                - generic [ref=e603]: Manu K M
              - cell "(Deleted)" [ref=e604]:
                - generic [ref=e605]: (Deleted)
              - cell "2024-06-02" [ref=e606]:
                - generic [ref=e607]: 2024-06-02
              - cell [ref=e608]
              - cell " " [ref=e609]:
                - generic [ref=e610]:
                  - button "" [ref=e611] [cursor=pointer]:
                    - generic [ref=e612]: 
                  - button "" [ref=e613] [cursor=pointer]:
                    - generic [ref=e614]: 
            - row " Manu K M (Deleted) 2024-06-02  " [ref=e616]:
              - cell "" [ref=e617]:
                - generic [ref=e620] [cursor=pointer]:
                  - checkbox "" [ref=e621]
                  - generic [ref=e623]: 
              - cell [ref=e624]
              - cell "Manu K M" [ref=e625]:
                - generic [ref=e626]: Manu K M
              - cell "(Deleted)" [ref=e627]:
                - generic [ref=e628]: (Deleted)
              - cell "2024-06-02" [ref=e629]:
                - generic [ref=e630]: 2024-06-02
              - cell [ref=e631]
              - cell " " [ref=e632]:
                - generic [ref=e633]:
                  - button "" [ref=e634] [cursor=pointer]:
                    - generic [ref=e635]: 
                  - button "" [ref=e636] [cursor=pointer]:
                    - generic [ref=e637]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e639]:
              - cell "" [ref=e640]:
                - generic [ref=e643] [cursor=pointer]:
                  - checkbox "" [ref=e644]
                  - generic [ref=e646]: 
              - cell [ref=e647]
              - cell "madhav m" [ref=e648]:
                - generic [ref=e649]: madhav m
              - cell "(Deleted)" [ref=e650]:
                - generic [ref=e651]: (Deleted)
              - cell "2024-06-02" [ref=e652]:
                - generic [ref=e653]: 2024-06-02
              - cell [ref=e654]
              - cell " " [ref=e655]:
                - generic [ref=e656]:
                  - button "" [ref=e657] [cursor=pointer]:
                    - generic [ref=e658]: 
                  - button "" [ref=e659] [cursor=pointer]:
                    - generic [ref=e660]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e662]:
              - cell "" [ref=e663]:
                - generic [ref=e666] [cursor=pointer]:
                  - checkbox "" [ref=e667]
                  - generic [ref=e669]: 
              - cell [ref=e670]
              - cell "madhav m" [ref=e671]:
                - generic [ref=e672]: madhav m
              - cell "(Deleted)" [ref=e673]:
                - generic [ref=e674]: (Deleted)
              - cell "2024-06-02" [ref=e675]:
                - generic [ref=e676]: 2024-06-02
              - cell [ref=e677]
              - cell " " [ref=e678]:
                - generic [ref=e679]:
                  - button "" [ref=e680] [cursor=pointer]:
                    - generic [ref=e681]: 
                  - button "" [ref=e682] [cursor=pointer]:
                    - generic [ref=e683]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e685]:
              - cell "" [ref=e686]:
                - generic [ref=e689] [cursor=pointer]:
                  - checkbox "" [ref=e690]
                  - generic [ref=e692]: 
              - cell [ref=e693]
              - cell "madhav m" [ref=e694]:
                - generic [ref=e695]: madhav m
              - cell "(Deleted)" [ref=e696]:
                - generic [ref=e697]: (Deleted)
              - cell "2024-06-02" [ref=e698]:
                - generic [ref=e699]: 2024-06-02
              - cell [ref=e700]
              - cell " " [ref=e701]:
                - generic [ref=e702]:
                  - button "" [ref=e703] [cursor=pointer]:
                    - generic [ref=e704]: 
                  - button "" [ref=e705] [cursor=pointer]:
                    - generic [ref=e706]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e708]:
              - cell "" [ref=e709]:
                - generic [ref=e712] [cursor=pointer]:
                  - checkbox "" [ref=e713]
                  - generic [ref=e715]: 
              - cell [ref=e716]
              - cell "madhav m" [ref=e717]:
                - generic [ref=e718]: madhav m
              - cell "(Deleted)" [ref=e719]:
                - generic [ref=e720]: (Deleted)
              - cell "2024-06-02" [ref=e721]:
                - generic [ref=e722]: 2024-06-02
              - cell [ref=e723]
              - cell " " [ref=e724]:
                - generic [ref=e725]:
                  - button "" [ref=e726] [cursor=pointer]:
                    - generic [ref=e727]: 
                  - button "" [ref=e728] [cursor=pointer]:
                    - generic [ref=e729]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e731]:
              - cell "" [ref=e732]:
                - generic [ref=e735] [cursor=pointer]:
                  - checkbox "" [ref=e736]
                  - generic [ref=e738]: 
              - cell [ref=e739]
              - cell "madhav m" [ref=e740]:
                - generic [ref=e741]: madhav m
              - cell "(Deleted)" [ref=e742]:
                - generic [ref=e743]: (Deleted)
              - cell "2024-06-02" [ref=e744]:
                - generic [ref=e745]: 2024-06-02
              - cell [ref=e746]
              - cell " " [ref=e747]:
                - generic [ref=e748]:
                  - button "" [ref=e749] [cursor=pointer]:
                    - generic [ref=e750]: 
                  - button "" [ref=e751] [cursor=pointer]:
                    - generic [ref=e752]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e754]:
              - cell "" [ref=e755]:
                - generic [ref=e758] [cursor=pointer]:
                  - checkbox "" [ref=e759]
                  - generic [ref=e761]: 
              - cell [ref=e762]
              - cell "madhav m" [ref=e763]:
                - generic [ref=e764]: madhav m
              - cell "(Deleted)" [ref=e765]:
                - generic [ref=e766]: (Deleted)
              - cell "2024-06-02" [ref=e767]:
                - generic [ref=e768]: 2024-06-02
              - cell [ref=e769]
              - cell " " [ref=e770]:
                - generic [ref=e771]:
                  - button "" [ref=e772] [cursor=pointer]:
                    - generic [ref=e773]: 
                  - button "" [ref=e774] [cursor=pointer]:
                    - generic [ref=e775]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Rejected   " [ref=e777]:
              - cell "" [ref=e778]:
                - generic [ref=e781] [cursor=pointer]:
                  - checkbox "" [ref=e782]
                  - generic [ref=e784]: 
              - cell "Senior QA Lead" [ref=e785]:
                - generic [ref=e786]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e787]:
                - generic [ref=e788]: Gautham Raj R
              - cell "(Deleted)" [ref=e789]:
                - generic [ref=e790]: (Deleted)
              - cell "2024-06-02" [ref=e791]:
                - generic [ref=e792]: 2024-06-02
              - cell "Rejected" [ref=e793]:
                - generic [ref=e794]: Rejected
              - cell "  " [ref=e795]:
                - generic [ref=e796]:
                  - button "" [ref=e797] [cursor=pointer]:
                    - generic [ref=e798]: 
                  - button "" [ref=e799] [cursor=pointer]:
                    - generic [ref=e800]: 
                  - button "" [ref=e801] [cursor=pointer]:
                    - generic [ref=e802]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e804]:
              - cell "" [ref=e805]:
                - generic [ref=e808] [cursor=pointer]:
                  - checkbox "" [ref=e809]
                  - generic [ref=e811]: 
              - cell "Senior QA Lead" [ref=e812]:
                - generic [ref=e813]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e814]:
                - generic [ref=e815]: Gautham Raj R
              - cell "(Deleted)" [ref=e816]:
                - generic [ref=e817]: (Deleted)
              - cell "2024-06-02" [ref=e818]:
                - generic [ref=e819]: 2024-06-02
              - cell "Shortlisted" [ref=e820]:
                - generic [ref=e821]: Shortlisted
              - cell "  " [ref=e822]:
                - generic [ref=e823]:
                  - button "" [ref=e824] [cursor=pointer]:
                    - generic [ref=e825]: 
                  - button "" [ref=e826] [cursor=pointer]:
                    - generic [ref=e827]: 
                  - button "" [ref=e828] [cursor=pointer]:
                    - generic [ref=e829]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e831]:
              - cell "" [ref=e832]:
                - generic [ref=e835] [cursor=pointer]:
                  - checkbox "" [ref=e836]
                  - generic [ref=e838]: 
              - cell "Senior QA Lead" [ref=e839]:
                - generic [ref=e840]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e841]:
                - generic [ref=e842]: Gautham Raj R
              - cell "(Deleted)" [ref=e843]:
                - generic [ref=e844]: (Deleted)
              - cell "2024-06-02" [ref=e845]:
                - generic [ref=e846]: 2024-06-02
              - cell "Shortlisted" [ref=e847]:
                - generic [ref=e848]: Shortlisted
              - cell "  " [ref=e849]:
                - generic [ref=e850]:
                  - button "" [ref=e851] [cursor=pointer]:
                    - generic [ref=e852]: 
                  - button "" [ref=e853] [cursor=pointer]:
                    - generic [ref=e854]: 
                  - button "" [ref=e855] [cursor=pointer]:
                    - generic [ref=e856]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e858]:
              - cell "" [ref=e859]:
                - generic [ref=e862] [cursor=pointer]:
                  - checkbox "" [ref=e863]
                  - generic [ref=e865]: 
              - cell "Senior QA Lead" [ref=e866]:
                - generic [ref=e867]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e868]:
                - generic [ref=e869]: Gautham Raj R
              - cell "(Deleted)" [ref=e870]:
                - generic [ref=e871]: (Deleted)
              - cell "2024-06-02" [ref=e872]:
                - generic [ref=e873]: 2024-06-02
              - cell "Shortlisted" [ref=e874]:
                - generic [ref=e875]: Shortlisted
              - cell "  " [ref=e876]:
                - generic [ref=e877]:
                  - button "" [ref=e878] [cursor=pointer]:
                    - generic [ref=e879]: 
                  - button "" [ref=e880] [cursor=pointer]:
                    - generic [ref=e881]: 
                  - button "" [ref=e882] [cursor=pointer]:
                    - generic [ref=e883]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Application Initiated   " [ref=e885]:
              - cell "" [ref=e886]:
                - generic [ref=e889] [cursor=pointer]:
                  - checkbox "" [ref=e890]
                  - generic [ref=e892]: 
              - cell "Senior QA Lead" [ref=e893]:
                - generic [ref=e894]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e895]:
                - generic [ref=e896]: Gautham Raj R
              - cell "(Deleted)" [ref=e897]:
                - generic [ref=e898]: (Deleted)
              - cell "2024-06-02" [ref=e899]:
                - generic [ref=e900]: 2024-06-02
              - cell "Application Initiated" [ref=e901]:
                - generic [ref=e902]: Application Initiated
              - cell "  " [ref=e903]:
                - generic [ref=e904]:
                  - button "" [ref=e905] [cursor=pointer]:
                    - generic [ref=e906]: 
                  - button "" [ref=e907] [cursor=pointer]:
                    - generic [ref=e908]: 
                  - button "" [ref=e909] [cursor=pointer]:
                    - generic [ref=e910]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Application Initiated   " [ref=e912]:
              - cell "" [ref=e913]:
                - generic [ref=e916] [cursor=pointer]:
                  - checkbox "" [ref=e917]
                  - generic [ref=e919]: 
              - cell "Senior QA Lead" [ref=e920]:
                - generic [ref=e921]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e922]:
                - generic [ref=e923]: Gautham Raj R
              - cell "(Deleted)" [ref=e924]:
                - generic [ref=e925]: (Deleted)
              - cell "2024-06-02" [ref=e926]:
                - generic [ref=e927]: 2024-06-02
              - cell "Application Initiated" [ref=e928]:
                - generic [ref=e929]: Application Initiated
              - cell "  " [ref=e930]:
                - generic [ref=e931]:
                  - button "" [ref=e932] [cursor=pointer]:
                    - generic [ref=e933]: 
                  - button "" [ref=e934] [cursor=pointer]:
                    - generic [ref=e935]: 
                  - button "" [ref=e936] [cursor=pointer]:
                    - generic [ref=e937]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e939]:
              - cell "" [ref=e940]:
                - generic [ref=e943] [cursor=pointer]:
                  - checkbox "" [ref=e944]
                  - generic [ref=e946]: 
              - cell "Senior QA Lead" [ref=e947]:
                - generic [ref=e948]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e949]:
                - generic [ref=e950]: Gautham Raj R
              - cell "(Deleted)" [ref=e951]:
                - generic [ref=e952]: (Deleted)
              - cell "2024-06-02" [ref=e953]:
                - generic [ref=e954]: 2024-06-02
              - cell "Shortlisted" [ref=e955]:
                - generic [ref=e956]: Shortlisted
              - cell "  " [ref=e957]:
                - generic [ref=e958]:
                  - button "" [ref=e959] [cursor=pointer]:
                    - generic [ref=e960]: 
                  - button "" [ref=e961] [cursor=pointer]:
                    - generic [ref=e962]: 
                  - button "" [ref=e963] [cursor=pointer]:
                    - generic [ref=e964]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Rejected   " [ref=e966]:
              - cell "" [ref=e967]:
                - generic [ref=e970] [cursor=pointer]:
                  - checkbox "" [ref=e971]
                  - generic [ref=e973]: 
              - cell "Senior QA Lead" [ref=e974]:
                - generic [ref=e975]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e976]:
                - generic [ref=e977]: Gautham Raj R
              - cell "(Deleted)" [ref=e978]:
                - generic [ref=e979]: (Deleted)
              - cell "2024-06-02" [ref=e980]:
                - generic [ref=e981]: 2024-06-02
              - cell "Rejected" [ref=e982]:
                - generic [ref=e983]: Rejected
              - cell "  " [ref=e984]:
                - generic [ref=e985]:
                  - button "" [ref=e986] [cursor=pointer]:
                    - generic [ref=e987]: 
                  - button "" [ref=e988] [cursor=pointer]:
                    - generic [ref=e989]: 
                  - button "" [ref=e990] [cursor=pointer]:
                    - generic [ref=e991]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e993]:
              - cell "" [ref=e994]:
                - generic [ref=e997] [cursor=pointer]:
                  - checkbox "" [ref=e998]
                  - generic [ref=e1000]: 
              - cell "Senior QA Lead" [ref=e1001]:
                - generic [ref=e1002]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1003]:
                - generic [ref=e1004]: Gautham Raj R
              - cell "(Deleted)" [ref=e1005]:
                - generic [ref=e1006]: (Deleted)
              - cell "2024-06-02" [ref=e1007]:
                - generic [ref=e1008]: 2024-06-02
              - cell "Shortlisted" [ref=e1009]:
                - generic [ref=e1010]: Shortlisted
              - cell "  " [ref=e1011]:
                - generic [ref=e1012]:
                  - button "" [ref=e1013] [cursor=pointer]:
                    - generic [ref=e1014]: 
                  - button "" [ref=e1015] [cursor=pointer]:
                    - generic [ref=e1016]: 
                  - button "" [ref=e1017] [cursor=pointer]:
                    - generic [ref=e1018]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1020]:
              - cell "" [ref=e1021]:
                - generic [ref=e1024] [cursor=pointer]:
                  - checkbox "" [ref=e1025]
                  - generic [ref=e1027]: 
              - cell "Senior QA Lead" [ref=e1028]:
                - generic [ref=e1029]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1030]:
                - generic [ref=e1031]: Gautham Raj R
              - cell "(Deleted)" [ref=e1032]:
                - generic [ref=e1033]: (Deleted)
              - cell "2024-06-02" [ref=e1034]:
                - generic [ref=e1035]: 2024-06-02
              - cell "Shortlisted" [ref=e1036]:
                - generic [ref=e1037]: Shortlisted
              - cell "  " [ref=e1038]:
                - generic [ref=e1039]:
                  - button "" [ref=e1040] [cursor=pointer]:
                    - generic [ref=e1041]: 
                  - button "" [ref=e1042] [cursor=pointer]:
                    - generic [ref=e1043]: 
                  - button "" [ref=e1044] [cursor=pointer]:
                    - generic [ref=e1045]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1047]:
              - cell "" [ref=e1048]:
                - generic [ref=e1051] [cursor=pointer]:
                  - checkbox "" [ref=e1052]
                  - generic [ref=e1054]: 
              - cell "Senior QA Lead" [ref=e1055]:
                - generic [ref=e1056]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1057]:
                - generic [ref=e1058]: Gautham Raj R
              - cell "(Deleted)" [ref=e1059]:
                - generic [ref=e1060]: (Deleted)
              - cell "2024-06-02" [ref=e1061]:
                - generic [ref=e1062]: 2024-06-02
              - cell "Shortlisted" [ref=e1063]:
                - generic [ref=e1064]: Shortlisted
              - cell "  " [ref=e1065]:
                - generic [ref=e1066]:
                  - button "" [ref=e1067] [cursor=pointer]:
                    - generic [ref=e1068]: 
                  - button "" [ref=e1069] [cursor=pointer]:
                    - generic [ref=e1070]: 
                  - button "" [ref=e1071] [cursor=pointer]:
                    - generic [ref=e1072]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1074]:
              - cell "" [ref=e1075]:
                - generic [ref=e1078] [cursor=pointer]:
                  - checkbox "" [ref=e1079]
                  - generic [ref=e1081]: 
              - cell "Senior QA Lead" [ref=e1082]:
                - generic [ref=e1083]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1084]:
                - generic [ref=e1085]: Gautham Raj R
              - cell "(Deleted)" [ref=e1086]:
                - generic [ref=e1087]: (Deleted)
              - cell "2024-06-02" [ref=e1088]:
                - generic [ref=e1089]: 2024-06-02
              - cell "Shortlisted" [ref=e1090]:
                - generic [ref=e1091]: Shortlisted
              - cell "  " [ref=e1092]:
                - generic [ref=e1093]:
                  - button "" [ref=e1094] [cursor=pointer]:
                    - generic [ref=e1095]: 
                  - button "" [ref=e1096] [cursor=pointer]:
                    - generic [ref=e1097]: 
                  - button "" [ref=e1098] [cursor=pointer]:
                    - generic [ref=e1099]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1101]:
              - cell "" [ref=e1102]:
                - generic [ref=e1105] [cursor=pointer]:
                  - checkbox "" [ref=e1106]
                  - generic [ref=e1108]: 
              - cell "Senior QA Lead" [ref=e1109]:
                - generic [ref=e1110]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1111]:
                - generic [ref=e1112]: Gautham Raj R
              - cell "(Deleted)" [ref=e1113]:
                - generic [ref=e1114]: (Deleted)
              - cell "2024-06-02" [ref=e1115]:
                - generic [ref=e1116]: 2024-06-02
              - cell "Shortlisted" [ref=e1117]:
                - generic [ref=e1118]: Shortlisted
              - cell "  " [ref=e1119]:
                - generic [ref=e1120]:
                  - button "" [ref=e1121] [cursor=pointer]:
                    - generic [ref=e1122]: 
                  - button "" [ref=e1123] [cursor=pointer]:
                    - generic [ref=e1124]: 
                  - button "" [ref=e1125] [cursor=pointer]:
                    - generic [ref=e1126]: 
            - row " Senior QA Lead Cedric C Ross. (Deleted) 2024-06-02 Shortlisted   " [ref=e1128]:
              - cell "" [ref=e1129]:
                - generic [ref=e1132] [cursor=pointer]:
                  - checkbox "" [ref=e1133]
                  - generic [ref=e1135]: 
              - cell "Senior QA Lead" [ref=e1136]:
                - generic [ref=e1137]: Senior QA Lead
              - cell "Cedric C Ross." [ref=e1138]:
                - generic [ref=e1139]: Cedric C Ross.
              - cell "(Deleted)" [ref=e1140]:
                - generic [ref=e1141]: (Deleted)
              - cell "2024-06-02" [ref=e1142]:
                - generic [ref=e1143]: 2024-06-02
              - cell "Shortlisted" [ref=e1144]:
                - generic [ref=e1145]: Shortlisted
              - cell "  " [ref=e1146]:
                - generic [ref=e1147]:
                  - button "" [ref=e1148] [cursor=pointer]:
                    - generic [ref=e1149]: 
                  - button "" [ref=e1150] [cursor=pointer]:
                    - generic [ref=e1151]: 
                  - button "" [ref=e1152] [cursor=pointer]:
                    - generic [ref=e1153]: 
            - row " Senior QA Lead Cedric C Ross. (Deleted) 2024-06-02 Shortlisted   " [ref=e1155]:
              - cell "" [ref=e1156]:
                - generic [ref=e1159] [cursor=pointer]:
                  - checkbox "" [ref=e1160]
                  - generic [ref=e1162]: 
              - cell "Senior QA Lead" [ref=e1163]:
                - generic [ref=e1164]: Senior QA Lead
              - cell "Cedric C Ross." [ref=e1165]:
                - generic [ref=e1166]: Cedric C Ross.
              - cell "(Deleted)" [ref=e1167]:
                - generic [ref=e1168]: (Deleted)
              - cell "2024-06-02" [ref=e1169]:
                - generic [ref=e1170]: 2024-06-02
              - cell "Shortlisted" [ref=e1171]:
                - generic [ref=e1172]: Shortlisted
              - cell "  " [ref=e1173]:
                - generic [ref=e1174]:
                  - button "" [ref=e1175] [cursor=pointer]:
                    - generic [ref=e1176]: 
                  - button "" [ref=e1177] [cursor=pointer]:
                    - generic [ref=e1178]: 
                  - button "" [ref=e1179] [cursor=pointer]:
                    - generic [ref=e1180]: 
            - row " Payroll Administrator TestFN TestMN TestLN Geeta Ranote 2024-06-02 Application Initiated  " [ref=e1182]:
              - cell "" [ref=e1183]:
                - generic [ref=e1186] [cursor=pointer]:
                  - checkbox "" [ref=e1187]
                  - generic [ref=e1189]: 
              - cell "Payroll Administrator" [ref=e1190]:
                - generic [ref=e1191]: Payroll Administrator
              - cell "TestFN TestMN TestLN" [ref=e1192]:
                - generic [ref=e1193]: TestFN TestMN TestLN
              - cell "Geeta Ranote" [ref=e1194]:
                - generic [ref=e1195]: Geeta Ranote
              - cell "2024-06-02" [ref=e1196]:
                - generic [ref=e1197]: 2024-06-02
              - cell "Application Initiated" [ref=e1198]:
                - generic [ref=e1199]: Application Initiated
              - cell " " [ref=e1200]:
                - generic [ref=e1201]:
                  - button "" [ref=e1202] [cursor=pointer]:
                    - generic [ref=e1203]: 
                  - button "" [ref=e1204] [cursor=pointer]:
                    - generic [ref=e1205]: 
            - row " Payroll Administrator TestFN TestMN TestLN Geeta Ranote 2024-06-02 Application Initiated  " [ref=e1207]:
              - cell "" [ref=e1208]:
                - generic [ref=e1211] [cursor=pointer]:
                  - checkbox "" [ref=e1212]
                  - generic [ref=e1214]: 
              - cell "Payroll Administrator" [ref=e1215]:
                - generic [ref=e1216]: Payroll Administrator
              - cell "TestFN TestMN TestLN" [ref=e1217]:
                - generic [ref=e1218]: TestFN TestMN TestLN
              - cell "Geeta Ranote" [ref=e1219]:
                - generic [ref=e1220]: Geeta Ranote
              - cell "2024-06-02" [ref=e1221]:
                - generic [ref=e1222]: 2024-06-02
              - cell "Application Initiated" [ref=e1223]:
                - generic [ref=e1224]: Application Initiated
              - cell " " [ref=e1225]:
                - generic [ref=e1226]:
                  - button "" [ref=e1227] [cursor=pointer]:
                    - generic [ref=e1228]: 
                  - button "" [ref=e1229] [cursor=pointer]:
                    - generic [ref=e1230]: 
            - row " Payroll Administrator TestFN TestMN TestLN Geeta Ranote 2024-06-02 Application Initiated   " [ref=e1232]:
              - cell "" [ref=e1233]:
                - generic [ref=e1236] [cursor=pointer]:
                  - checkbox "" [ref=e1237]
                  - generic [ref=e1239]: 
              - cell "Payroll Administrator" [ref=e1240]:
                - generic [ref=e1241]: Payroll Administrator
              - cell "TestFN TestMN TestLN" [ref=e1242]:
                - generic [ref=e1243]: TestFN TestMN TestLN
              - cell "Geeta Ranote" [ref=e1244]:
                - generic [ref=e1245]: Geeta Ranote
              - cell "2024-06-02" [ref=e1246]:
                - generic [ref=e1247]: 2024-06-02
              - cell "Application Initiated" [ref=e1248]:
                - generic [ref=e1249]: Application Initiated
              - cell "  " [ref=e1250]:
                - generic [ref=e1251]:
                  - button "" [ref=e1252] [cursor=pointer]:
                    - generic [ref=e1253]: 
                  - button "" [ref=e1254] [cursor=pointer]:
                    - generic [ref=e1255]: 
                  - button "" [ref=e1256] [cursor=pointer]:
                    - generic [ref=e1257]: 
            - row " Payroll Administrator TestFN TestMN TestLN Geeta Ranote 2024-06-02 Application Initiated   " [ref=e1259]:
              - cell "" [ref=e1260]:
                - generic [ref=e1263] [cursor=pointer]:
                  - checkbox "" [ref=e1264]
                  - generic [ref=e1266]: 
              - cell "Payroll Administrator" [ref=e1267]:
                - generic [ref=e1268]: Payroll Administrator
              - cell "TestFN TestMN TestLN" [ref=e1269]:
                - generic [ref=e1270]: TestFN TestMN TestLN
              - cell "Geeta Ranote" [ref=e1271]:
                - generic [ref=e1272]: Geeta Ranote
              - cell "2024-06-02" [ref=e1273]:
                - generic [ref=e1274]: 2024-06-02
              - cell "Application Initiated" [ref=e1275]:
                - generic [ref=e1276]: Application Initiated
              - cell "  " [ref=e1277]:
                - generic [ref=e1278]:
                  - button "" [ref=e1279] [cursor=pointer]:
                    - generic [ref=e1280]: 
                  - button "" [ref=e1281] [cursor=pointer]:
                    - generic [ref=e1282]: 
                  - button "" [ref=e1283] [cursor=pointer]:
                    - generic [ref=e1284]: 
            - row " Payroll Administrator TestFN TestMN TestLN Geeta Ranote 2024-06-02 Application Initiated   " [ref=e1286]:
              - cell "" [ref=e1287]:
                - generic [ref=e1290] [cursor=pointer]:
                  - checkbox "" [ref=e1291]
                  - generic [ref=e1293]: 
              - cell "Payroll Administrator" [ref=e1294]:
                - generic [ref=e1295]: Payroll Administrator
              - cell "TestFN TestMN TestLN" [ref=e1296]:
                - generic [ref=e1297]: TestFN TestMN TestLN
              - cell "Geeta Ranote" [ref=e1298]:
                - generic [ref=e1299]: Geeta Ranote
              - cell "2024-06-02" [ref=e1300]:
                - generic [ref=e1301]: 2024-06-02
              - cell "Application Initiated" [ref=e1302]:
                - generic [ref=e1303]: Application Initiated
              - cell "  " [ref=e1304]:
                - generic [ref=e1305]:
                  - button "" [ref=e1306] [cursor=pointer]:
                    - generic [ref=e1307]: 
                  - button "" [ref=e1308] [cursor=pointer]:
                    - generic [ref=e1309]: 
                  - button "" [ref=e1310] [cursor=pointer]:
                    - generic [ref=e1311]: 
            - row " Payroll Administrator TestFN TestMN TestLN Geeta Ranote 2024-06-02 Application Initiated   " [ref=e1313]:
              - cell "" [ref=e1314]:
                - generic [ref=e1317] [cursor=pointer]:
                  - checkbox "" [ref=e1318]
                  - generic [ref=e1320]: 
              - cell "Payroll Administrator" [ref=e1321]:
                - generic [ref=e1322]: Payroll Administrator
              - cell "TestFN TestMN TestLN" [ref=e1323]:
                - generic [ref=e1324]: TestFN TestMN TestLN
              - cell "Geeta Ranote" [ref=e1325]:
                - generic [ref=e1326]: Geeta Ranote
              - cell "2024-06-02" [ref=e1327]:
                - generic [ref=e1328]: 2024-06-02
              - cell "Application Initiated" [ref=e1329]:
                - generic [ref=e1330]: Application Initiated
              - cell "  " [ref=e1331]:
                - generic [ref=e1332]:
                  - button "" [ref=e1333] [cursor=pointer]:
                    - generic [ref=e1334]: 
                  - button "" [ref=e1335] [cursor=pointer]:
                    - generic [ref=e1336]: 
                  - button "" [ref=e1337] [cursor=pointer]:
                    - generic [ref=e1338]: 
            - row " Payroll Administrator TestFN TestMN TestLN Geeta Ranote 2024-06-02 Application Initiated   " [ref=e1340]:
              - cell "" [ref=e1341]:
                - generic [ref=e1344] [cursor=pointer]:
                  - checkbox "" [ref=e1345]
                  - generic [ref=e1347]: 
              - cell "Payroll Administrator" [ref=e1348]:
                - generic [ref=e1349]: Payroll Administrator
              - cell "TestFN TestMN TestLN" [ref=e1350]:
                - generic [ref=e1351]: TestFN TestMN TestLN
              - cell "Geeta Ranote" [ref=e1352]:
                - generic [ref=e1353]: Geeta Ranote
              - cell "2024-06-02" [ref=e1354]:
                - generic [ref=e1355]: 2024-06-02
              - cell "Application Initiated" [ref=e1356]:
                - generic [ref=e1357]: Application Initiated
              - cell "  " [ref=e1358]:
                - generic [ref=e1359]:
                  - button "" [ref=e1360] [cursor=pointer]:
                    - generic [ref=e1361]: 
                  - button "" [ref=e1362] [cursor=pointer]:
                    - generic [ref=e1363]: 
                  - button "" [ref=e1364] [cursor=pointer]:
                    - generic [ref=e1365]: 
            - row " AntoAnto 09:58 AM M Varghese (Deleted) 2024-06-02  " [ref=e1367]:
              - cell "" [ref=e1368]:
                - generic [ref=e1371] [cursor=pointer]:
                  - checkbox "" [ref=e1372]
                  - generic [ref=e1374]: 
              - cell [ref=e1375]
              - cell "AntoAnto 09:58 AM M Varghese" [ref=e1376]:
                - generic [ref=e1377]: AntoAnto 09:58 AM M Varghese
              - cell "(Deleted)" [ref=e1378]:
                - generic [ref=e1379]: (Deleted)
              - cell "2024-06-02" [ref=e1380]:
                - generic [ref=e1381]: 2024-06-02
              - cell [ref=e1382]
              - cell " " [ref=e1383]:
                - generic [ref=e1384]:
                  - button "" [ref=e1385] [cursor=pointer]:
                    - generic [ref=e1386]: 
                  - button "" [ref=e1387] [cursor=pointer]:
                    - generic [ref=e1388]: 
            - row " Anto 10:15 AM M Varghese (Deleted) 2024-06-02  " [ref=e1390]:
              - cell "" [ref=e1391]:
                - generic [ref=e1394] [cursor=pointer]:
                  - checkbox "" [ref=e1395]
                  - generic [ref=e1397]: 
              - cell [ref=e1398]
              - cell "Anto 10:15 AM M Varghese" [ref=e1399]:
                - generic [ref=e1400]: Anto 10:15 AM M Varghese
              - cell "(Deleted)" [ref=e1401]:
                - generic [ref=e1402]: (Deleted)
              - cell "2024-06-02" [ref=e1403]:
                - generic [ref=e1404]: 2024-06-02
              - cell [ref=e1405]
              - cell " " [ref=e1406]:
                - generic [ref=e1407]:
                  - button "" [ref=e1408] [cursor=pointer]:
                    - generic [ref=e1409]: 
                  - button "" [ref=e1410] [cursor=pointer]:
                    - generic [ref=e1411]: 
            - row " Anto 10:20 AM M Varghese (Deleted) 2024-06-02  " [ref=e1413]:
              - cell "" [ref=e1414]:
                - generic [ref=e1417] [cursor=pointer]:
                  - checkbox "" [ref=e1418]
                  - generic [ref=e1420]: 
              - cell [ref=e1421]
              - cell "Anto 10:20 AM M Varghese" [ref=e1422]:
                - generic [ref=e1423]: Anto 10:20 AM M Varghese
              - cell "(Deleted)" [ref=e1424]:
                - generic [ref=e1425]: (Deleted)
              - cell "2024-06-02" [ref=e1426]:
                - generic [ref=e1427]: 2024-06-02
              - cell [ref=e1428]
              - cell " " [ref=e1429]:
                - generic [ref=e1430]:
                  - button "" [ref=e1431] [cursor=pointer]:
                    - generic [ref=e1432]: 
                  - button "" [ref=e1433] [cursor=pointer]:
                    - generic [ref=e1434]: 
            - row " Anto 10:26 AM M Varghese (Deleted) 2024-06-02  " [ref=e1436]:
              - cell "" [ref=e1437]:
                - generic [ref=e1440] [cursor=pointer]:
                  - checkbox "" [ref=e1441]
                  - generic [ref=e1443]: 
              - cell [ref=e1444]
              - cell "Anto 10:26 AM M Varghese" [ref=e1445]:
                - generic [ref=e1446]: Anto 10:26 AM M Varghese
              - cell "(Deleted)" [ref=e1447]:
                - generic [ref=e1448]: (Deleted)
              - cell "2024-06-02" [ref=e1449]:
                - generic [ref=e1450]: 2024-06-02
              - cell [ref=e1451]
              - cell " " [ref=e1452]:
                - generic [ref=e1453]:
                  - button "" [ref=e1454] [cursor=pointer]:
                    - generic [ref=e1455]: 
                  - button "" [ref=e1456] [cursor=pointer]:
                    - generic [ref=e1457]: 
            - row " Anto 10:28 AM M Varghese (Deleted) 2024-06-02  " [ref=e1459]:
              - cell "" [ref=e1460]:
                - generic [ref=e1463] [cursor=pointer]:
                  - checkbox "" [ref=e1464]
                  - generic [ref=e1466]: 
              - cell [ref=e1467]
              - cell "Anto 10:28 AM M Varghese" [ref=e1468]:
                - generic [ref=e1469]: Anto 10:28 AM M Varghese
              - cell "(Deleted)" [ref=e1470]:
                - generic [ref=e1471]: (Deleted)
              - cell "2024-06-02" [ref=e1472]:
                - generic [ref=e1473]: 2024-06-02
              - cell [ref=e1474]
              - cell " " [ref=e1475]:
                - generic [ref=e1476]:
                  - button "" [ref=e1477] [cursor=pointer]:
                    - generic [ref=e1478]: 
                  - button "" [ref=e1479] [cursor=pointer]:
                    - generic [ref=e1480]: 
            - row " Anto 10:37 AM M Varghese (Deleted) 2024-06-02  " [ref=e1482]:
              - cell "" [ref=e1483]:
                - generic [ref=e1486] [cursor=pointer]:
                  - checkbox "" [ref=e1487]
                  - generic [ref=e1489]: 
              - cell [ref=e1490]
              - cell "Anto 10:37 AM M Varghese" [ref=e1491]:
                - generic [ref=e1492]: Anto 10:37 AM M Varghese
              - cell "(Deleted)" [ref=e1493]:
                - generic [ref=e1494]: (Deleted)
              - cell "2024-06-02" [ref=e1495]:
                - generic [ref=e1496]: 2024-06-02
              - cell [ref=e1497]
              - cell " " [ref=e1498]:
                - generic [ref=e1499]:
                  - button "" [ref=e1500] [cursor=pointer]:
                    - generic [ref=e1501]: 
                  - button "" [ref=e1502] [cursor=pointer]:
                    - generic [ref=e1503]: 
            - row " Anto 10:40 AM M Varghese (Deleted) 2024-06-02  " [ref=e1505]:
              - cell "" [ref=e1506]:
                - generic [ref=e1509] [cursor=pointer]:
                  - checkbox "" [ref=e1510]
                  - generic [ref=e1512]: 
              - cell [ref=e1513]
              - cell "Anto 10:40 AM M Varghese" [ref=e1514]:
                - generic [ref=e1515]: Anto 10:40 AM M Varghese
              - cell "(Deleted)" [ref=e1516]:
                - generic [ref=e1517]: (Deleted)
              - cell "2024-06-02" [ref=e1518]:
                - generic [ref=e1519]: 2024-06-02
              - cell [ref=e1520]
              - cell " " [ref=e1521]:
                - generic [ref=e1522]:
                  - button "" [ref=e1523] [cursor=pointer]:
                    - generic [ref=e1524]: 
                  - button "" [ref=e1525] [cursor=pointer]:
                    - generic [ref=e1526]: 
            - row " Senior QA Lead Murali13s Krishna7d5 Veerfa3 (Deleted) 2024-06-02 Application Initiated   " [ref=e1528]:
              - cell "" [ref=e1529]:
                - generic [ref=e1532] [cursor=pointer]:
                  - checkbox "" [ref=e1533]
                  - generic [ref=e1535]: 
              - cell "Senior QA Lead" [ref=e1536]:
                - generic [ref=e1537]: Senior QA Lead
              - cell "Murali13s Krishna7d5 Veerfa3" [ref=e1538]:
                - generic [ref=e1539]: Murali13s Krishna7d5 Veerfa3
              - cell "(Deleted)" [ref=e1540]:
                - generic [ref=e1541]: (Deleted)
              - cell "2024-06-02" [ref=e1542]:
                - generic [ref=e1543]: 2024-06-02
              - cell "Application Initiated" [ref=e1544]:
                - generic [ref=e1545]: Application Initiated
              - cell "  " [ref=e1546]:
                - generic [ref=e1547]:
                  - button "" [ref=e1548] [cursor=pointer]:
                    - generic [ref=e1549]: 
                  - button "" [ref=e1550] [cursor=pointer]:
                    - generic [ref=e1551]: 
                  - button "" [ref=e1552] [cursor=pointer]:
                    - generic [ref=e1553]: 
        - navigation "Pagination Navigation" [ref=e1555]:
          - list [ref=e1556]:
            - listitem [ref=e1557]:
              - button "1" [ref=e1558] [cursor=pointer]
            - listitem [ref=e1559]:
              - button "2" [ref=e1560] [cursor=pointer]
            - listitem [ref=e1561]:
              - button "" [ref=e1562] [cursor=pointer]:
                - generic [ref=e1563]: 
    - generic [ref=e1564]:
      - paragraph [ref=e1565]: OrangeHRM OS 5.8
      - paragraph [ref=e1566]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e1567]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class RecruitmentPage {
  4   | 
  5   |   constructor(page) {
  6   | 
  7   |     this.page = page;
  8   | 
  9   |     this.recruitmentMenu =
  10  |       page.getByRole('link', {
  11  |         name: 'Recruitment'
  12  |       });
  13  | 
  14  |     this.addButton =
  15  |       page.getByRole('button', {
  16  |         name: 'Add'
  17  |       });
  18  | 
  19  |     this.searchButton =
  20  |       page.getByRole('button', {
  21  |         name: 'Search'
  22  |       });
  23  | 
  24  |     this.resetButton =
  25  |       page.getByRole('button', {
  26  |         name: 'Reset'
  27  |       });
  28  | 
  29  |     this.candidatesTab =
  30  |       page.getByRole('link', {
  31  |         name: 'Candidates'
  32  |       });
  33  | 
  34  |     this.vacanciesTab =
  35  |       page.getByRole('link', {
  36  |         name: 'Vacancies'
  37  |       });
  38  | 
  39  |     this.tableBody =
  40  |       page.locator('.oxd-table-body');
  41  | 
  42  |     this.form =
  43  |       page.locator('form');
  44  | 
  45  |     this.header =
  46  |       page.getByRole('heading').first();
  47  |   }
  48  | 
  49  |   async navigateToRecruitment() {
  50  | 
  51  |   await Promise.all([
> 52  |     this.page.waitForURL(
      |               ^ TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
  53  |       '**/recruitment/viewRecruitmentModule',
  54  |       { timeout: 30000 }
  55  |     ),
  56  |     this.recruitmentMenu.click()
  57  |   ]);
  58  | 
  59  |   await expect(
  60  |     this.searchButton
  61  |   ).toBeVisible({
  62  |     timeout: 30000
  63  |   });
  64  | }
  65  | 
  66  |   async verifyRecruitmentPageLoaded() {
  67  |     await expect(this.searchButton).toBeVisible();
  68  |   }
  69  | 
  70  |   async verifyAddButtonVisible() {
  71  |     await expect(this.addButton).toBeVisible();
  72  |   }
  73  | 
  74  |   async verifySearchButtonVisible() {
  75  |     await expect(this.searchButton).toBeVisible();
  76  |   }
  77  | 
  78  |   async verifyResetButtonVisible() {
  79  |     await expect(this.resetButton).toBeVisible();
  80  |   }
  81  | 
  82  |   async verifyCandidatesTabVisible() {
  83  |     await expect(this.candidatesTab).toBeVisible();
  84  |   }
  85  | 
  86  |   async verifyVacanciesTabVisible() {
  87  |     await expect(this.vacanciesTab).toBeVisible();
  88  |   }
  89  | 
  90  |   async verifyRecruitmentMenuVisible() {
  91  |     await expect(this.recruitmentMenu).toBeVisible();
  92  |   }
  93  | 
  94  |   async verifyAddButtonEnabled() {
  95  |     await expect(this.addButton).toBeEnabled();
  96  |   }
  97  | 
  98  |   async verifySearchButtonEnabled() {
  99  |     await expect(this.searchButton).toBeEnabled();
  100 |   }
  101 | 
  102 |   async verifyResetButtonEnabled() {
  103 |     await expect(this.resetButton).toBeEnabled();
  104 |   }
  105 | 
  106 |   async verifyTableVisible() {
  107 |     await expect(this.tableBody).toBeVisible();
  108 |   }
  109 | 
  110 |   async verifyFormVisible() {
  111 |     await expect(this.form).toBeVisible();
  112 |   }
  113 | 
  114 |   async verifyHeaderVisible() {
  115 |     await expect(this.header).toBeVisible();
  116 |   }
  117 | 
  118 |   async verifyCandidatesPage() {
  119 |     await this.candidatesTab.click();
  120 |     await expect(this.searchButton).toBeVisible();
  121 |   }
  122 | 
  123 |   async verifyVacanciesPage() {
  124 |     await this.vacanciesTab.click();
  125 |     await expect(this.searchButton).toBeVisible();
  126 |   }
  127 | }
  128 | 
  129 | module.exports = { RecruitmentPage };
```