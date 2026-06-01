# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: recruitment/recruitment.spec.js >> Recruitment Module Tests >> Verify Add Button Visible
- Location: tests/recruitment/recruitment.spec.js:21:3

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
          - link "client brand banner" [ref=e7] [cursor=pointer]:
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
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
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
              - paragraph [ref=e127]: Richard Johnson
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
          - generic [ref=e252]: (76) Records Found
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
            - row " Auto Candidate (Deleted) 2026-01-06  " [ref=e281]:
              - cell "" [ref=e282]:
                - generic [ref=e285] [cursor=pointer]:
                  - checkbox "" [ref=e286]
                  - generic [ref=e288]: 
              - cell [ref=e289]
              - cell "Auto Candidate" [ref=e290]:
                - generic [ref=e291]: Auto Candidate
              - cell "(Deleted)" [ref=e292]:
                - generic [ref=e293]: (Deleted)
              - cell "2026-01-06" [ref=e294]:
                - generic [ref=e295]: 2026-01-06
              - cell [ref=e296]
              - cell " " [ref=e297]:
                - generic [ref=e298]:
                  - button "" [ref=e299] [cursor=pointer]:
                    - generic [ref=e300]: 
                  - button "" [ref=e301] [cursor=pointer]:
                    - generic [ref=e302]: 
            - row " Auto Candidate (Deleted) 2026-01-06  " [ref=e304]:
              - cell "" [ref=e305]:
                - generic [ref=e308] [cursor=pointer]:
                  - checkbox "" [ref=e309]
                  - generic [ref=e311]: 
              - cell [ref=e312]
              - cell "Auto Candidate" [ref=e313]:
                - generic [ref=e314]: Auto Candidate
              - cell "(Deleted)" [ref=e315]:
                - generic [ref=e316]: (Deleted)
              - cell "2026-01-06" [ref=e317]:
                - generic [ref=e318]: 2026-01-06
              - cell [ref=e319]
              - cell " " [ref=e320]:
                - generic [ref=e321]:
                  - button "" [ref=e322] [cursor=pointer]:
                    - generic [ref=e323]: 
                  - button "" [ref=e324] [cursor=pointer]:
                    - generic [ref=e325]: 
            - row " Auto Candidate (Deleted) 2026-01-06  " [ref=e327]:
              - cell "" [ref=e328]:
                - generic [ref=e331] [cursor=pointer]:
                  - checkbox "" [ref=e332]
                  - generic [ref=e334]: 
              - cell [ref=e335]
              - cell "Auto Candidate" [ref=e336]:
                - generic [ref=e337]: Auto Candidate
              - cell "(Deleted)" [ref=e338]:
                - generic [ref=e339]: (Deleted)
              - cell "2026-01-06" [ref=e340]:
                - generic [ref=e341]: 2026-01-06
              - cell [ref=e342]
              - cell " " [ref=e343]:
                - generic [ref=e344]:
                  - button "" [ref=e345] [cursor=pointer]:
                    - generic [ref=e346]: 
                  - button "" [ref=e347] [cursor=pointer]:
                    - generic [ref=e348]: 
            - row " Auto Candidate (Deleted) 2026-01-06  " [ref=e350]:
              - cell "" [ref=e351]:
                - generic [ref=e354] [cursor=pointer]:
                  - checkbox "" [ref=e355]
                  - generic [ref=e357]: 
              - cell [ref=e358]
              - cell "Auto Candidate" [ref=e359]:
                - generic [ref=e360]: Auto Candidate
              - cell "(Deleted)" [ref=e361]:
                - generic [ref=e362]: (Deleted)
              - cell "2026-01-06" [ref=e363]:
                - generic [ref=e364]: 2026-01-06
              - cell [ref=e365]
              - cell " " [ref=e366]:
                - generic [ref=e367]:
                  - button "" [ref=e368] [cursor=pointer]:
                    - generic [ref=e369]: 
                  - button "" [ref=e370] [cursor=pointer]:
                    - generic [ref=e371]: 
            - row " Auto Candidate (Deleted) 2026-01-06  " [ref=e373]:
              - cell "" [ref=e374]:
                - generic [ref=e377] [cursor=pointer]:
                  - checkbox "" [ref=e378]
                  - generic [ref=e380]: 
              - cell [ref=e381]
              - cell "Auto Candidate" [ref=e382]:
                - generic [ref=e383]: Auto Candidate
              - cell "(Deleted)" [ref=e384]:
                - generic [ref=e385]: (Deleted)
              - cell "2026-01-06" [ref=e386]:
                - generic [ref=e387]: 2026-01-06
              - cell [ref=e388]
              - cell " " [ref=e389]:
                - generic [ref=e390]:
                  - button "" [ref=e391] [cursor=pointer]:
                    - generic [ref=e392]: 
                  - button "" [ref=e393] [cursor=pointer]:
                    - generic [ref=e394]: 
            - row " Auto Candidate (Deleted) 2026-01-06  " [ref=e396]:
              - cell "" [ref=e397]:
                - generic [ref=e400] [cursor=pointer]:
                  - checkbox "" [ref=e401]
                  - generic [ref=e403]: 
              - cell [ref=e404]
              - cell "Auto Candidate" [ref=e405]:
                - generic [ref=e406]: Auto Candidate
              - cell "(Deleted)" [ref=e407]:
                - generic [ref=e408]: (Deleted)
              - cell "2026-01-06" [ref=e409]:
                - generic [ref=e410]: 2026-01-06
              - cell [ref=e411]
              - cell " " [ref=e412]:
                - generic [ref=e413]:
                  - button "" [ref=e414] [cursor=pointer]:
                    - generic [ref=e415]: 
                  - button "" [ref=e416] [cursor=pointer]:
                    - generic [ref=e417]: 
            - row " Auto Candidate (Deleted) 2026-01-06  " [ref=e419]:
              - cell "" [ref=e420]:
                - generic [ref=e423] [cursor=pointer]:
                  - checkbox "" [ref=e424]
                  - generic [ref=e426]: 
              - cell [ref=e427]
              - cell "Auto Candidate" [ref=e428]:
                - generic [ref=e429]: Auto Candidate
              - cell "(Deleted)" [ref=e430]:
                - generic [ref=e431]: (Deleted)
              - cell "2026-01-06" [ref=e432]:
                - generic [ref=e433]: 2026-01-06
              - cell [ref=e434]
              - cell " " [ref=e435]:
                - generic [ref=e436]:
                  - button "" [ref=e437] [cursor=pointer]:
                    - generic [ref=e438]: 
                  - button "" [ref=e439] [cursor=pointer]:
                    - generic [ref=e440]: 
            - row " Auto Candidate (Deleted) 2026-01-06  " [ref=e442]:
              - cell "" [ref=e443]:
                - generic [ref=e446] [cursor=pointer]:
                  - checkbox "" [ref=e447]
                  - generic [ref=e449]: 
              - cell [ref=e450]
              - cell "Auto Candidate" [ref=e451]:
                - generic [ref=e452]: Auto Candidate
              - cell "(Deleted)" [ref=e453]:
                - generic [ref=e454]: (Deleted)
              - cell "2026-01-06" [ref=e455]:
                - generic [ref=e456]: 2026-01-06
              - cell [ref=e457]
              - cell " " [ref=e458]:
                - generic [ref=e459]:
                  - button "" [ref=e460] [cursor=pointer]:
                    - generic [ref=e461]: 
                  - button "" [ref=e462] [cursor=pointer]:
                    - generic [ref=e463]: 
            - row " Sophia9785 Miller9785 (Deleted) 2026-01-06  " [ref=e465]:
              - cell "" [ref=e466]:
                - generic [ref=e469] [cursor=pointer]:
                  - checkbox "" [ref=e470]
                  - generic [ref=e472]: 
              - cell [ref=e473]
              - cell "Sophia9785 Miller9785" [ref=e474]:
                - generic [ref=e475]: Sophia9785 Miller9785
              - cell "(Deleted)" [ref=e476]:
                - generic [ref=e477]: (Deleted)
              - cell "2026-01-06" [ref=e478]:
                - generic [ref=e479]: 2026-01-06
              - cell [ref=e480]
              - cell " " [ref=e481]:
                - generic [ref=e482]:
                  - button "" [ref=e483] [cursor=pointer]:
                    - generic [ref=e484]: 
                  - button "" [ref=e485] [cursor=pointer]:
                    - generic [ref=e486]: 
            - row " Payroll Administrator testing automation task Richard akhill Johnson 2026-01-06 Rejected  " [ref=e488]:
              - cell "" [ref=e489]:
                - generic [ref=e492] [cursor=pointer]:
                  - checkbox "" [ref=e493]
                  - generic [ref=e495]: 
              - cell "Payroll Administrator" [ref=e496]:
                - generic [ref=e497]: Payroll Administrator
              - cell "testing automation task" [ref=e498]:
                - generic [ref=e499]: testing automation task
              - cell "Richard akhill Johnson" [ref=e500]:
                - generic [ref=e501]: Richard akhill Johnson
              - cell "2026-01-06" [ref=e502]:
                - generic [ref=e503]: 2026-01-06
              - cell "Rejected" [ref=e504]:
                - generic [ref=e505]: Rejected
              - cell " " [ref=e506]:
                - generic [ref=e507]:
                  - button "" [ref=e508] [cursor=pointer]:
                    - generic [ref=e509]: 
                  - button "" [ref=e510] [cursor=pointer]:
                    - generic [ref=e511]: 
            - row " Payroll Administrator testing automation task Richard akhill Johnson 2026-01-06 Application Initiated  " [ref=e513]:
              - cell "" [ref=e514]:
                - generic [ref=e517] [cursor=pointer]:
                  - checkbox "" [ref=e518]
                  - generic [ref=e520]: 
              - cell "Payroll Administrator" [ref=e521]:
                - generic [ref=e522]: Payroll Administrator
              - cell "testing automation task" [ref=e523]:
                - generic [ref=e524]: testing automation task
              - cell "Richard akhill Johnson" [ref=e525]:
                - generic [ref=e526]: Richard akhill Johnson
              - cell "2026-01-06" [ref=e527]:
                - generic [ref=e528]: 2026-01-06
              - cell "Application Initiated" [ref=e529]:
                - generic [ref=e530]: Application Initiated
              - cell " " [ref=e531]:
                - generic [ref=e532]:
                  - button "" [ref=e533] [cursor=pointer]:
                    - generic [ref=e534]: 
                  - button "" [ref=e535] [cursor=pointer]:
                    - generic [ref=e536]: 
            - row " Vinay Tester (Deleted) 2026-01-06  " [ref=e538]:
              - cell "" [ref=e539]:
                - generic [ref=e542] [cursor=pointer]:
                  - checkbox "" [ref=e543]
                  - generic [ref=e545]: 
              - cell [ref=e546]
              - cell "Vinay Tester" [ref=e547]:
                - generic [ref=e548]: Vinay Tester
              - cell "(Deleted)" [ref=e549]:
                - generic [ref=e550]: (Deleted)
              - cell "2026-01-06" [ref=e551]:
                - generic [ref=e552]: 2026-01-06
              - cell [ref=e553]
              - cell " " [ref=e554]:
                - generic [ref=e555]:
                  - button "" [ref=e556] [cursor=pointer]:
                    - generic [ref=e557]: 
                  - button "" [ref=e558] [cursor=pointer]:
                    - generic [ref=e559]: 
            - row " Vinay Tester (Deleted) 2026-01-06  " [ref=e561]:
              - cell "" [ref=e562]:
                - generic [ref=e565] [cursor=pointer]:
                  - checkbox "" [ref=e566]
                  - generic [ref=e568]: 
              - cell [ref=e569]
              - cell "Vinay Tester" [ref=e570]:
                - generic [ref=e571]: Vinay Tester
              - cell "(Deleted)" [ref=e572]:
                - generic [ref=e573]: (Deleted)
              - cell "2026-01-06" [ref=e574]:
                - generic [ref=e575]: 2026-01-06
              - cell [ref=e576]
              - cell " " [ref=e577]:
                - generic [ref=e578]:
                  - button "" [ref=e579] [cursor=pointer]:
                    - generic [ref=e580]: 
                  - button "" [ref=e581] [cursor=pointer]:
                    - generic [ref=e582]: 
            - row " Vinay Tester (Deleted) 2026-01-06  " [ref=e584]:
              - cell "" [ref=e585]:
                - generic [ref=e588] [cursor=pointer]:
                  - checkbox "" [ref=e589]
                  - generic [ref=e591]: 
              - cell [ref=e592]
              - cell "Vinay Tester" [ref=e593]:
                - generic [ref=e594]: Vinay Tester
              - cell "(Deleted)" [ref=e595]:
                - generic [ref=e596]: (Deleted)
              - cell "2026-01-06" [ref=e597]:
                - generic [ref=e598]: 2026-01-06
              - cell [ref=e599]
              - cell " " [ref=e600]:
                - generic [ref=e601]:
                  - button "" [ref=e602] [cursor=pointer]:
                    - generic [ref=e603]: 
                  - button "" [ref=e604] [cursor=pointer]:
                    - generic [ref=e605]: 
            - row " Vinay Tester (Deleted) 2026-01-06  " [ref=e607]:
              - cell "" [ref=e608]:
                - generic [ref=e611] [cursor=pointer]:
                  - checkbox "" [ref=e612]
                  - generic [ref=e614]: 
              - cell [ref=e615]
              - cell "Vinay Tester" [ref=e616]:
                - generic [ref=e617]: Vinay Tester
              - cell "(Deleted)" [ref=e618]:
                - generic [ref=e619]: (Deleted)
              - cell "2026-01-06" [ref=e620]:
                - generic [ref=e621]: 2026-01-06
              - cell [ref=e622]
              - cell " " [ref=e623]:
                - generic [ref=e624]:
                  - button "" [ref=e625] [cursor=pointer]:
                    - generic [ref=e626]: 
                  - button "" [ref=e627] [cursor=pointer]:
                    - generic [ref=e628]: 
            - row " Vinay Tester (Deleted) 2026-01-06  " [ref=e630]:
              - cell "" [ref=e631]:
                - generic [ref=e634] [cursor=pointer]:
                  - checkbox "" [ref=e635]
                  - generic [ref=e637]: 
              - cell [ref=e638]
              - cell "Vinay Tester" [ref=e639]:
                - generic [ref=e640]: Vinay Tester
              - cell "(Deleted)" [ref=e641]:
                - generic [ref=e642]: (Deleted)
              - cell "2026-01-06" [ref=e643]:
                - generic [ref=e644]: 2026-01-06
              - cell [ref=e645]
              - cell " " [ref=e646]:
                - generic [ref=e647]:
                  - button "" [ref=e648] [cursor=pointer]:
                    - generic [ref=e649]: 
                  - button "" [ref=e650] [cursor=pointer]:
                    - generic [ref=e651]: 
            - row " Tanmay Anderson O'Keefe (Deleted) 2024-29-03  " [ref=e653]:
              - cell "" [ref=e654]:
                - generic [ref=e657] [cursor=pointer]:
                  - checkbox "" [ref=e658]
                  - generic [ref=e660]: 
              - cell [ref=e661]
              - cell "Tanmay Anderson O'Keefe" [ref=e662]:
                - generic [ref=e663]: Tanmay Anderson O'Keefe
              - cell "(Deleted)" [ref=e664]:
                - generic [ref=e665]: (Deleted)
              - cell "2024-29-03" [ref=e666]:
                - generic [ref=e667]: 2024-29-03
              - cell [ref=e668]
              - cell " " [ref=e669]:
                - generic [ref=e670]:
                  - button "" [ref=e671] [cursor=pointer]:
                    - generic [ref=e672]: 
                  - button "" [ref=e673] [cursor=pointer]:
                    - generic [ref=e674]: 
            - row " Tanmay sree Dachu (Deleted) 2024-06-02   " [ref=e676]:
              - cell "" [ref=e677]:
                - generic [ref=e680] [cursor=pointer]:
                  - checkbox "" [ref=e681]
                  - generic [ref=e683]: 
              - cell [ref=e684]
              - cell "Tanmay sree Dachu" [ref=e685]:
                - generic [ref=e686]: Tanmay sree Dachu
              - cell "(Deleted)" [ref=e687]:
                - generic [ref=e688]: (Deleted)
              - cell "2024-06-02" [ref=e689]:
                - generic [ref=e690]: 2024-06-02
              - cell [ref=e691]
              - cell "  " [ref=e692]:
                - generic [ref=e693]:
                  - button "" [ref=e694] [cursor=pointer]:
                    - generic [ref=e695]: 
                  - button "" [ref=e696] [cursor=pointer]:
                    - generic [ref=e697]: 
                  - button "" [ref=e698] [cursor=pointer]:
                    - generic [ref=e699]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e701]:
              - cell "" [ref=e702]:
                - generic [ref=e705] [cursor=pointer]:
                  - checkbox "" [ref=e706]
                  - generic [ref=e708]: 
              - cell "Senior QA Lead" [ref=e709]:
                - generic [ref=e710]: Senior QA Lead
              - cell "John Doe" [ref=e711]:
                - generic [ref=e712]: John Doe
              - cell "(Deleted)" [ref=e713]:
                - generic [ref=e714]: (Deleted)
              - cell "2024-06-02" [ref=e715]:
                - generic [ref=e716]: 2024-06-02
              - cell "Shortlisted" [ref=e717]:
                - generic [ref=e718]: Shortlisted
              - cell "  " [ref=e719]:
                - generic [ref=e720]:
                  - button "" [ref=e721] [cursor=pointer]:
                    - generic [ref=e722]: 
                  - button "" [ref=e723] [cursor=pointer]:
                    - generic [ref=e724]: 
                  - button "" [ref=e725] [cursor=pointer]:
                    - generic [ref=e726]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e728]:
              - cell "" [ref=e729]:
                - generic [ref=e732] [cursor=pointer]:
                  - checkbox "" [ref=e733]
                  - generic [ref=e735]: 
              - cell "Senior QA Lead" [ref=e736]:
                - generic [ref=e737]: Senior QA Lead
              - cell "John Doe" [ref=e738]:
                - generic [ref=e739]: John Doe
              - cell "(Deleted)" [ref=e740]:
                - generic [ref=e741]: (Deleted)
              - cell "2024-06-02" [ref=e742]:
                - generic [ref=e743]: 2024-06-02
              - cell "Shortlisted" [ref=e744]:
                - generic [ref=e745]: Shortlisted
              - cell "  " [ref=e746]:
                - generic [ref=e747]:
                  - button "" [ref=e748] [cursor=pointer]:
                    - generic [ref=e749]: 
                  - button "" [ref=e750] [cursor=pointer]:
                    - generic [ref=e751]: 
                  - button "" [ref=e752] [cursor=pointer]:
                    - generic [ref=e753]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e755]:
              - cell "" [ref=e756]:
                - generic [ref=e759] [cursor=pointer]:
                  - checkbox "" [ref=e760]
                  - generic [ref=e762]: 
              - cell "Senior QA Lead" [ref=e763]:
                - generic [ref=e764]: Senior QA Lead
              - cell "John Doe" [ref=e765]:
                - generic [ref=e766]: John Doe
              - cell "(Deleted)" [ref=e767]:
                - generic [ref=e768]: (Deleted)
              - cell "2024-06-02" [ref=e769]:
                - generic [ref=e770]: 2024-06-02
              - cell "Shortlisted" [ref=e771]:
                - generic [ref=e772]: Shortlisted
              - cell "  " [ref=e773]:
                - generic [ref=e774]:
                  - button "" [ref=e775] [cursor=pointer]:
                    - generic [ref=e776]: 
                  - button "" [ref=e777] [cursor=pointer]:
                    - generic [ref=e778]: 
                  - button "" [ref=e779] [cursor=pointer]:
                    - generic [ref=e780]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e782]:
              - cell "" [ref=e783]:
                - generic [ref=e786] [cursor=pointer]:
                  - checkbox "" [ref=e787]
                  - generic [ref=e789]: 
              - cell "Senior QA Lead" [ref=e790]:
                - generic [ref=e791]: Senior QA Lead
              - cell "John Doe" [ref=e792]:
                - generic [ref=e793]: John Doe
              - cell "(Deleted)" [ref=e794]:
                - generic [ref=e795]: (Deleted)
              - cell "2024-06-02" [ref=e796]:
                - generic [ref=e797]: 2024-06-02
              - cell "Shortlisted" [ref=e798]:
                - generic [ref=e799]: Shortlisted
              - cell "  " [ref=e800]:
                - generic [ref=e801]:
                  - button "" [ref=e802] [cursor=pointer]:
                    - generic [ref=e803]: 
                  - button "" [ref=e804] [cursor=pointer]:
                    - generic [ref=e805]: 
                  - button "" [ref=e806] [cursor=pointer]:
                    - generic [ref=e807]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e809]:
              - cell "" [ref=e810]:
                - generic [ref=e813] [cursor=pointer]:
                  - checkbox "" [ref=e814]
                  - generic [ref=e816]: 
              - cell "Senior QA Lead" [ref=e817]:
                - generic [ref=e818]: Senior QA Lead
              - cell "John Doe" [ref=e819]:
                - generic [ref=e820]: John Doe
              - cell "(Deleted)" [ref=e821]:
                - generic [ref=e822]: (Deleted)
              - cell "2024-06-02" [ref=e823]:
                - generic [ref=e824]: 2024-06-02
              - cell "Shortlisted" [ref=e825]:
                - generic [ref=e826]: Shortlisted
              - cell "  " [ref=e827]:
                - generic [ref=e828]:
                  - button "" [ref=e829] [cursor=pointer]:
                    - generic [ref=e830]: 
                  - button "" [ref=e831] [cursor=pointer]:
                    - generic [ref=e832]: 
                  - button "" [ref=e833] [cursor=pointer]:
                    - generic [ref=e834]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e836]:
              - cell "" [ref=e837]:
                - generic [ref=e840] [cursor=pointer]:
                  - checkbox "" [ref=e841]
                  - generic [ref=e843]: 
              - cell "Senior QA Lead" [ref=e844]:
                - generic [ref=e845]: Senior QA Lead
              - cell "John Doe" [ref=e846]:
                - generic [ref=e847]: John Doe
              - cell "(Deleted)" [ref=e848]:
                - generic [ref=e849]: (Deleted)
              - cell "2024-06-02" [ref=e850]:
                - generic [ref=e851]: 2024-06-02
              - cell "Shortlisted" [ref=e852]:
                - generic [ref=e853]: Shortlisted
              - cell "  " [ref=e854]:
                - generic [ref=e855]:
                  - button "" [ref=e856] [cursor=pointer]:
                    - generic [ref=e857]: 
                  - button "" [ref=e858] [cursor=pointer]:
                    - generic [ref=e859]: 
                  - button "" [ref=e860] [cursor=pointer]:
                    - generic [ref=e861]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Rejected   " [ref=e863]:
              - cell "" [ref=e864]:
                - generic [ref=e867] [cursor=pointer]:
                  - checkbox "" [ref=e868]
                  - generic [ref=e870]: 
              - cell "Senior QA Lead" [ref=e871]:
                - generic [ref=e872]: Senior QA Lead
              - cell "John Doe" [ref=e873]:
                - generic [ref=e874]: John Doe
              - cell "(Deleted)" [ref=e875]:
                - generic [ref=e876]: (Deleted)
              - cell "2024-06-02" [ref=e877]:
                - generic [ref=e878]: 2024-06-02
              - cell "Rejected" [ref=e879]:
                - generic [ref=e880]: Rejected
              - cell "  " [ref=e881]:
                - generic [ref=e882]:
                  - button "" [ref=e883] [cursor=pointer]:
                    - generic [ref=e884]: 
                  - button "" [ref=e885] [cursor=pointer]:
                    - generic [ref=e886]: 
                  - button "" [ref=e887] [cursor=pointer]:
                    - generic [ref=e888]: 
            - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   " [ref=e890]:
              - cell "" [ref=e891]:
                - generic [ref=e894] [cursor=pointer]:
                  - checkbox "" [ref=e895]
                  - generic [ref=e897]: 
              - cell "Senior QA Lead" [ref=e898]:
                - generic [ref=e899]: Senior QA Lead
              - cell "John Doe" [ref=e900]:
                - generic [ref=e901]: John Doe
              - cell "(Deleted)" [ref=e902]:
                - generic [ref=e903]: (Deleted)
              - cell "2024-06-02" [ref=e904]:
                - generic [ref=e905]: 2024-06-02
              - cell "Shortlisted" [ref=e906]:
                - generic [ref=e907]: Shortlisted
              - cell "  " [ref=e908]:
                - generic [ref=e909]:
                  - button "" [ref=e910] [cursor=pointer]:
                    - generic [ref=e911]: 
                  - button "" [ref=e912] [cursor=pointer]:
                    - generic [ref=e913]: 
                  - button "" [ref=e914] [cursor=pointer]:
                    - generic [ref=e915]: 
            - row " Manu K M (Deleted) 2024-06-02  " [ref=e917]:
              - cell "" [ref=e918]:
                - generic [ref=e921] [cursor=pointer]:
                  - checkbox "" [ref=e922]
                  - generic [ref=e924]: 
              - cell [ref=e925]
              - cell "Manu K M" [ref=e926]:
                - generic [ref=e927]: Manu K M
              - cell "(Deleted)" [ref=e928]:
                - generic [ref=e929]: (Deleted)
              - cell "2024-06-02" [ref=e930]:
                - generic [ref=e931]: 2024-06-02
              - cell [ref=e932]
              - cell " " [ref=e933]:
                - generic [ref=e934]:
                  - button "" [ref=e935] [cursor=pointer]:
                    - generic [ref=e936]: 
                  - button "" [ref=e937] [cursor=pointer]:
                    - generic [ref=e938]: 
            - row " Manu K M (Deleted) 2024-06-02  " [ref=e940]:
              - cell "" [ref=e941]:
                - generic [ref=e944] [cursor=pointer]:
                  - checkbox "" [ref=e945]
                  - generic [ref=e947]: 
              - cell [ref=e948]
              - cell "Manu K M" [ref=e949]:
                - generic [ref=e950]: Manu K M
              - cell "(Deleted)" [ref=e951]:
                - generic [ref=e952]: (Deleted)
              - cell "2024-06-02" [ref=e953]:
                - generic [ref=e954]: 2024-06-02
              - cell [ref=e955]
              - cell " " [ref=e956]:
                - generic [ref=e957]:
                  - button "" [ref=e958] [cursor=pointer]:
                    - generic [ref=e959]: 
                  - button "" [ref=e960] [cursor=pointer]:
                    - generic [ref=e961]: 
            - row " Manu K M (Deleted) 2024-06-02  " [ref=e963]:
              - cell "" [ref=e964]:
                - generic [ref=e967] [cursor=pointer]:
                  - checkbox "" [ref=e968]
                  - generic [ref=e970]: 
              - cell [ref=e971]
              - cell "Manu K M" [ref=e972]:
                - generic [ref=e973]: Manu K M
              - cell "(Deleted)" [ref=e974]:
                - generic [ref=e975]: (Deleted)
              - cell "2024-06-02" [ref=e976]:
                - generic [ref=e977]: 2024-06-02
              - cell [ref=e978]
              - cell " " [ref=e979]:
                - generic [ref=e980]:
                  - button "" [ref=e981] [cursor=pointer]:
                    - generic [ref=e982]: 
                  - button "" [ref=e983] [cursor=pointer]:
                    - generic [ref=e984]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e986]:
              - cell "" [ref=e987]:
                - generic [ref=e990] [cursor=pointer]:
                  - checkbox "" [ref=e991]
                  - generic [ref=e993]: 
              - cell [ref=e994]
              - cell "madhav m" [ref=e995]:
                - generic [ref=e996]: madhav m
              - cell "(Deleted)" [ref=e997]:
                - generic [ref=e998]: (Deleted)
              - cell "2024-06-02" [ref=e999]:
                - generic [ref=e1000]: 2024-06-02
              - cell [ref=e1001]
              - cell " " [ref=e1002]:
                - generic [ref=e1003]:
                  - button "" [ref=e1004] [cursor=pointer]:
                    - generic [ref=e1005]: 
                  - button "" [ref=e1006] [cursor=pointer]:
                    - generic [ref=e1007]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e1009]:
              - cell "" [ref=e1010]:
                - generic [ref=e1013] [cursor=pointer]:
                  - checkbox "" [ref=e1014]
                  - generic [ref=e1016]: 
              - cell [ref=e1017]
              - cell "madhav m" [ref=e1018]:
                - generic [ref=e1019]: madhav m
              - cell "(Deleted)" [ref=e1020]:
                - generic [ref=e1021]: (Deleted)
              - cell "2024-06-02" [ref=e1022]:
                - generic [ref=e1023]: 2024-06-02
              - cell [ref=e1024]
              - cell " " [ref=e1025]:
                - generic [ref=e1026]:
                  - button "" [ref=e1027] [cursor=pointer]:
                    - generic [ref=e1028]: 
                  - button "" [ref=e1029] [cursor=pointer]:
                    - generic [ref=e1030]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e1032]:
              - cell "" [ref=e1033]:
                - generic [ref=e1036] [cursor=pointer]:
                  - checkbox "" [ref=e1037]
                  - generic [ref=e1039]: 
              - cell [ref=e1040]
              - cell "madhav m" [ref=e1041]:
                - generic [ref=e1042]: madhav m
              - cell "(Deleted)" [ref=e1043]:
                - generic [ref=e1044]: (Deleted)
              - cell "2024-06-02" [ref=e1045]:
                - generic [ref=e1046]: 2024-06-02
              - cell [ref=e1047]
              - cell " " [ref=e1048]:
                - generic [ref=e1049]:
                  - button "" [ref=e1050] [cursor=pointer]:
                    - generic [ref=e1051]: 
                  - button "" [ref=e1052] [cursor=pointer]:
                    - generic [ref=e1053]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e1055]:
              - cell "" [ref=e1056]:
                - generic [ref=e1059] [cursor=pointer]:
                  - checkbox "" [ref=e1060]
                  - generic [ref=e1062]: 
              - cell [ref=e1063]
              - cell "madhav m" [ref=e1064]:
                - generic [ref=e1065]: madhav m
              - cell "(Deleted)" [ref=e1066]:
                - generic [ref=e1067]: (Deleted)
              - cell "2024-06-02" [ref=e1068]:
                - generic [ref=e1069]: 2024-06-02
              - cell [ref=e1070]
              - cell " " [ref=e1071]:
                - generic [ref=e1072]:
                  - button "" [ref=e1073] [cursor=pointer]:
                    - generic [ref=e1074]: 
                  - button "" [ref=e1075] [cursor=pointer]:
                    - generic [ref=e1076]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e1078]:
              - cell "" [ref=e1079]:
                - generic [ref=e1082] [cursor=pointer]:
                  - checkbox "" [ref=e1083]
                  - generic [ref=e1085]: 
              - cell [ref=e1086]
              - cell "madhav m" [ref=e1087]:
                - generic [ref=e1088]: madhav m
              - cell "(Deleted)" [ref=e1089]:
                - generic [ref=e1090]: (Deleted)
              - cell "2024-06-02" [ref=e1091]:
                - generic [ref=e1092]: 2024-06-02
              - cell [ref=e1093]
              - cell " " [ref=e1094]:
                - generic [ref=e1095]:
                  - button "" [ref=e1096] [cursor=pointer]:
                    - generic [ref=e1097]: 
                  - button "" [ref=e1098] [cursor=pointer]:
                    - generic [ref=e1099]: 
            - row " madhav m (Deleted) 2024-06-02  " [ref=e1101]:
              - cell "" [ref=e1102]:
                - generic [ref=e1105] [cursor=pointer]:
                  - checkbox "" [ref=e1106]
                  - generic [ref=e1108]: 
              - cell [ref=e1109]
              - cell "madhav m" [ref=e1110]:
                - generic [ref=e1111]: madhav m
              - cell "(Deleted)" [ref=e1112]:
                - generic [ref=e1113]: (Deleted)
              - cell "2024-06-02" [ref=e1114]:
                - generic [ref=e1115]: 2024-06-02
              - cell [ref=e1116]
              - cell " " [ref=e1117]:
                - generic [ref=e1118]:
                  - button "" [ref=e1119] [cursor=pointer]:
                    - generic [ref=e1120]: 
                  - button "" [ref=e1121] [cursor=pointer]:
                    - generic [ref=e1122]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Rejected   " [ref=e1124]:
              - cell "" [ref=e1125]:
                - generic [ref=e1128] [cursor=pointer]:
                  - checkbox "" [ref=e1129]
                  - generic [ref=e1131]: 
              - cell "Senior QA Lead" [ref=e1132]:
                - generic [ref=e1133]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1134]:
                - generic [ref=e1135]: Gautham Raj R
              - cell "(Deleted)" [ref=e1136]:
                - generic [ref=e1137]: (Deleted)
              - cell "2024-06-02" [ref=e1138]:
                - generic [ref=e1139]: 2024-06-02
              - cell "Rejected" [ref=e1140]:
                - generic [ref=e1141]: Rejected
              - cell "  " [ref=e1142]:
                - generic [ref=e1143]:
                  - button "" [ref=e1144] [cursor=pointer]:
                    - generic [ref=e1145]: 
                  - button "" [ref=e1146] [cursor=pointer]:
                    - generic [ref=e1147]: 
                  - button "" [ref=e1148] [cursor=pointer]:
                    - generic [ref=e1149]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1151]:
              - cell "" [ref=e1152]:
                - generic [ref=e1155] [cursor=pointer]:
                  - checkbox "" [ref=e1156]
                  - generic [ref=e1158]: 
              - cell "Senior QA Lead" [ref=e1159]:
                - generic [ref=e1160]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1161]:
                - generic [ref=e1162]: Gautham Raj R
              - cell "(Deleted)" [ref=e1163]:
                - generic [ref=e1164]: (Deleted)
              - cell "2024-06-02" [ref=e1165]:
                - generic [ref=e1166]: 2024-06-02
              - cell "Shortlisted" [ref=e1167]:
                - generic [ref=e1168]: Shortlisted
              - cell "  " [ref=e1169]:
                - generic [ref=e1170]:
                  - button "" [ref=e1171] [cursor=pointer]:
                    - generic [ref=e1172]: 
                  - button "" [ref=e1173] [cursor=pointer]:
                    - generic [ref=e1174]: 
                  - button "" [ref=e1175] [cursor=pointer]:
                    - generic [ref=e1176]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1178]:
              - cell "" [ref=e1179]:
                - generic [ref=e1182] [cursor=pointer]:
                  - checkbox "" [ref=e1183]
                  - generic [ref=e1185]: 
              - cell "Senior QA Lead" [ref=e1186]:
                - generic [ref=e1187]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1188]:
                - generic [ref=e1189]: Gautham Raj R
              - cell "(Deleted)" [ref=e1190]:
                - generic [ref=e1191]: (Deleted)
              - cell "2024-06-02" [ref=e1192]:
                - generic [ref=e1193]: 2024-06-02
              - cell "Shortlisted" [ref=e1194]:
                - generic [ref=e1195]: Shortlisted
              - cell "  " [ref=e1196]:
                - generic [ref=e1197]:
                  - button "" [ref=e1198] [cursor=pointer]:
                    - generic [ref=e1199]: 
                  - button "" [ref=e1200] [cursor=pointer]:
                    - generic [ref=e1201]: 
                  - button "" [ref=e1202] [cursor=pointer]:
                    - generic [ref=e1203]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1205]:
              - cell "" [ref=e1206]:
                - generic [ref=e1209] [cursor=pointer]:
                  - checkbox "" [ref=e1210]
                  - generic [ref=e1212]: 
              - cell "Senior QA Lead" [ref=e1213]:
                - generic [ref=e1214]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1215]:
                - generic [ref=e1216]: Gautham Raj R
              - cell "(Deleted)" [ref=e1217]:
                - generic [ref=e1218]: (Deleted)
              - cell "2024-06-02" [ref=e1219]:
                - generic [ref=e1220]: 2024-06-02
              - cell "Shortlisted" [ref=e1221]:
                - generic [ref=e1222]: Shortlisted
              - cell "  " [ref=e1223]:
                - generic [ref=e1224]:
                  - button "" [ref=e1225] [cursor=pointer]:
                    - generic [ref=e1226]: 
                  - button "" [ref=e1227] [cursor=pointer]:
                    - generic [ref=e1228]: 
                  - button "" [ref=e1229] [cursor=pointer]:
                    - generic [ref=e1230]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Application Initiated   " [ref=e1232]:
              - cell "" [ref=e1233]:
                - generic [ref=e1236] [cursor=pointer]:
                  - checkbox "" [ref=e1237]
                  - generic [ref=e1239]: 
              - cell "Senior QA Lead" [ref=e1240]:
                - generic [ref=e1241]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1242]:
                - generic [ref=e1243]: Gautham Raj R
              - cell "(Deleted)" [ref=e1244]:
                - generic [ref=e1245]: (Deleted)
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
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Application Initiated   " [ref=e1259]:
              - cell "" [ref=e1260]:
                - generic [ref=e1263] [cursor=pointer]:
                  - checkbox "" [ref=e1264]
                  - generic [ref=e1266]: 
              - cell "Senior QA Lead" [ref=e1267]:
                - generic [ref=e1268]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1269]:
                - generic [ref=e1270]: Gautham Raj R
              - cell "(Deleted)" [ref=e1271]:
                - generic [ref=e1272]: (Deleted)
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
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1286]:
              - cell "" [ref=e1287]:
                - generic [ref=e1290] [cursor=pointer]:
                  - checkbox "" [ref=e1291]
                  - generic [ref=e1293]: 
              - cell "Senior QA Lead" [ref=e1294]:
                - generic [ref=e1295]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1296]:
                - generic [ref=e1297]: Gautham Raj R
              - cell "(Deleted)" [ref=e1298]:
                - generic [ref=e1299]: (Deleted)
              - cell "2024-06-02" [ref=e1300]:
                - generic [ref=e1301]: 2024-06-02
              - cell "Shortlisted" [ref=e1302]:
                - generic [ref=e1303]: Shortlisted
              - cell "  " [ref=e1304]:
                - generic [ref=e1305]:
                  - button "" [ref=e1306] [cursor=pointer]:
                    - generic [ref=e1307]: 
                  - button "" [ref=e1308] [cursor=pointer]:
                    - generic [ref=e1309]: 
                  - button "" [ref=e1310] [cursor=pointer]:
                    - generic [ref=e1311]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Rejected   " [ref=e1313]:
              - cell "" [ref=e1314]:
                - generic [ref=e1317] [cursor=pointer]:
                  - checkbox "" [ref=e1318]
                  - generic [ref=e1320]: 
              - cell "Senior QA Lead" [ref=e1321]:
                - generic [ref=e1322]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1323]:
                - generic [ref=e1324]: Gautham Raj R
              - cell "(Deleted)" [ref=e1325]:
                - generic [ref=e1326]: (Deleted)
              - cell "2024-06-02" [ref=e1327]:
                - generic [ref=e1328]: 2024-06-02
              - cell "Rejected" [ref=e1329]:
                - generic [ref=e1330]: Rejected
              - cell "  " [ref=e1331]:
                - generic [ref=e1332]:
                  - button "" [ref=e1333] [cursor=pointer]:
                    - generic [ref=e1334]: 
                  - button "" [ref=e1335] [cursor=pointer]:
                    - generic [ref=e1336]: 
                  - button "" [ref=e1337] [cursor=pointer]:
                    - generic [ref=e1338]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1340]:
              - cell "" [ref=e1341]:
                - generic [ref=e1344] [cursor=pointer]:
                  - checkbox "" [ref=e1345]
                  - generic [ref=e1347]: 
              - cell "Senior QA Lead" [ref=e1348]:
                - generic [ref=e1349]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1350]:
                - generic [ref=e1351]: Gautham Raj R
              - cell "(Deleted)" [ref=e1352]:
                - generic [ref=e1353]: (Deleted)
              - cell "2024-06-02" [ref=e1354]:
                - generic [ref=e1355]: 2024-06-02
              - cell "Shortlisted" [ref=e1356]:
                - generic [ref=e1357]: Shortlisted
              - cell "  " [ref=e1358]:
                - generic [ref=e1359]:
                  - button "" [ref=e1360] [cursor=pointer]:
                    - generic [ref=e1361]: 
                  - button "" [ref=e1362] [cursor=pointer]:
                    - generic [ref=e1363]: 
                  - button "" [ref=e1364] [cursor=pointer]:
                    - generic [ref=e1365]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1367]:
              - cell "" [ref=e1368]:
                - generic [ref=e1371] [cursor=pointer]:
                  - checkbox "" [ref=e1372]
                  - generic [ref=e1374]: 
              - cell "Senior QA Lead" [ref=e1375]:
                - generic [ref=e1376]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1377]:
                - generic [ref=e1378]: Gautham Raj R
              - cell "(Deleted)" [ref=e1379]:
                - generic [ref=e1380]: (Deleted)
              - cell "2024-06-02" [ref=e1381]:
                - generic [ref=e1382]: 2024-06-02
              - cell "Shortlisted" [ref=e1383]:
                - generic [ref=e1384]: Shortlisted
              - cell "  " [ref=e1385]:
                - generic [ref=e1386]:
                  - button "" [ref=e1387] [cursor=pointer]:
                    - generic [ref=e1388]: 
                  - button "" [ref=e1389] [cursor=pointer]:
                    - generic [ref=e1390]: 
                  - button "" [ref=e1391] [cursor=pointer]:
                    - generic [ref=e1392]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1394]:
              - cell "" [ref=e1395]:
                - generic [ref=e1398] [cursor=pointer]:
                  - checkbox "" [ref=e1399]
                  - generic [ref=e1401]: 
              - cell "Senior QA Lead" [ref=e1402]:
                - generic [ref=e1403]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1404]:
                - generic [ref=e1405]: Gautham Raj R
              - cell "(Deleted)" [ref=e1406]:
                - generic [ref=e1407]: (Deleted)
              - cell "2024-06-02" [ref=e1408]:
                - generic [ref=e1409]: 2024-06-02
              - cell "Shortlisted" [ref=e1410]:
                - generic [ref=e1411]: Shortlisted
              - cell "  " [ref=e1412]:
                - generic [ref=e1413]:
                  - button "" [ref=e1414] [cursor=pointer]:
                    - generic [ref=e1415]: 
                  - button "" [ref=e1416] [cursor=pointer]:
                    - generic [ref=e1417]: 
                  - button "" [ref=e1418] [cursor=pointer]:
                    - generic [ref=e1419]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1421]:
              - cell "" [ref=e1422]:
                - generic [ref=e1425] [cursor=pointer]:
                  - checkbox "" [ref=e1426]
                  - generic [ref=e1428]: 
              - cell "Senior QA Lead" [ref=e1429]:
                - generic [ref=e1430]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1431]:
                - generic [ref=e1432]: Gautham Raj R
              - cell "(Deleted)" [ref=e1433]:
                - generic [ref=e1434]: (Deleted)
              - cell "2024-06-02" [ref=e1435]:
                - generic [ref=e1436]: 2024-06-02
              - cell "Shortlisted" [ref=e1437]:
                - generic [ref=e1438]: Shortlisted
              - cell "  " [ref=e1439]:
                - generic [ref=e1440]:
                  - button "" [ref=e1441] [cursor=pointer]:
                    - generic [ref=e1442]: 
                  - button "" [ref=e1443] [cursor=pointer]:
                    - generic [ref=e1444]: 
                  - button "" [ref=e1445] [cursor=pointer]:
                    - generic [ref=e1446]: 
            - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   " [ref=e1448]:
              - cell "" [ref=e1449]:
                - generic [ref=e1452] [cursor=pointer]:
                  - checkbox "" [ref=e1453]
                  - generic [ref=e1455]: 
              - cell "Senior QA Lead" [ref=e1456]:
                - generic [ref=e1457]: Senior QA Lead
              - cell "Gautham Raj R" [ref=e1458]:
                - generic [ref=e1459]: Gautham Raj R
              - cell "(Deleted)" [ref=e1460]:
                - generic [ref=e1461]: (Deleted)
              - cell "2024-06-02" [ref=e1462]:
                - generic [ref=e1463]: 2024-06-02
              - cell "Shortlisted" [ref=e1464]:
                - generic [ref=e1465]: Shortlisted
              - cell "  " [ref=e1466]:
                - generic [ref=e1467]:
                  - button "" [ref=e1468] [cursor=pointer]:
                    - generic [ref=e1469]: 
                  - button "" [ref=e1470] [cursor=pointer]:
                    - generic [ref=e1471]: 
                  - button "" [ref=e1472] [cursor=pointer]:
                    - generic [ref=e1473]: 
            - row " Senior QA Lead Cedric C Ross. (Deleted) 2024-06-02 Shortlisted   " [ref=e1475]:
              - cell "" [ref=e1476]:
                - generic [ref=e1479] [cursor=pointer]:
                  - checkbox "" [ref=e1480]
                  - generic [ref=e1482]: 
              - cell "Senior QA Lead" [ref=e1483]:
                - generic [ref=e1484]: Senior QA Lead
              - cell "Cedric C Ross." [ref=e1485]:
                - generic [ref=e1486]: Cedric C Ross.
              - cell "(Deleted)" [ref=e1487]:
                - generic [ref=e1488]: (Deleted)
              - cell "2024-06-02" [ref=e1489]:
                - generic [ref=e1490]: 2024-06-02
              - cell "Shortlisted" [ref=e1491]:
                - generic [ref=e1492]: Shortlisted
              - cell "  " [ref=e1493]:
                - generic [ref=e1494]:
                  - button "" [ref=e1495] [cursor=pointer]:
                    - generic [ref=e1496]: 
                  - button "" [ref=e1497] [cursor=pointer]:
                    - generic [ref=e1498]: 
                  - button "" [ref=e1499] [cursor=pointer]:
                    - generic [ref=e1500]: 
            - row " Senior QA Lead Cedric C Ross. (Deleted) 2024-06-02 Shortlisted   " [ref=e1502]:
              - cell "" [ref=e1503]:
                - generic [ref=e1506] [cursor=pointer]:
                  - checkbox "" [ref=e1507]
                  - generic [ref=e1509]: 
              - cell "Senior QA Lead" [ref=e1510]:
                - generic [ref=e1511]: Senior QA Lead
              - cell "Cedric C Ross." [ref=e1512]:
                - generic [ref=e1513]: Cedric C Ross.
              - cell "(Deleted)" [ref=e1514]:
                - generic [ref=e1515]: (Deleted)
              - cell "2024-06-02" [ref=e1516]:
                - generic [ref=e1517]: 2024-06-02
              - cell "Shortlisted" [ref=e1518]:
                - generic [ref=e1519]: Shortlisted
              - cell "  " [ref=e1520]:
                - generic [ref=e1521]:
                  - button "" [ref=e1522] [cursor=pointer]:
                    - generic [ref=e1523]: 
                  - button "" [ref=e1524] [cursor=pointer]:
                    - generic [ref=e1525]: 
                  - button "" [ref=e1526] [cursor=pointer]:
                    - generic [ref=e1527]: 
        - navigation "Pagination Navigation" [ref=e1529]:
          - list [ref=e1530]:
            - listitem [ref=e1531]:
              - button "1" [ref=e1532] [cursor=pointer]
            - listitem [ref=e1533]:
              - button "2" [ref=e1534] [cursor=pointer]
            - listitem [ref=e1535]:
              - button "" [ref=e1536] [cursor=pointer]:
                - generic [ref=e1537]: 
    - generic [ref=e1538]:
      - paragraph [ref=e1539]: OrangeHRM OS 5.8
      - paragraph [ref=e1540]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e1541] [cursor=pointer]:
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