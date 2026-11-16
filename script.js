/* Shared site behavior; original blocks retain their execution order. */
const SCHOOL_PAGE = document.body.dataset.page || "home";
const SCHOOL_ROUTES = {
  "our-school": "our-school.html",
  "spg-history": "history.html",
  "spg-vision": "vision-mission-motto.html",
  "spg-management": "management.html",
  "spg-principal": "principals-message.html",
  "spg-campus": "campus-infrastructure.html",
  "spg-spaces": "spaces.html",
  "spg-conduct": "code-of-conduct.html",
  "spg-discipline": "discipline.html",
  "spg-timings": "school-timings.html",
  "spg-curriculum": "curriculum.html",
  "spg-subjects": "subjects-offered.html",
  "spg-exams": "examination-rules-pattern.html",
  "spg-scholastics": "scholastics.html",
  "spg-coscholastics": "co-scholastics.html",
  "spg-achievements": "achievements.html",
  "spg-admissions": "admission-process.html",
  "spg-prospectus": "prospectus.html",
  "spg-magazine": "magazine.html",
  "spg-gallery": "gallery.html",
  "spg-alumni": "alumni.html",
  "spg-careers": "work-with-us.html",
  "spg-contact": "contact-us.html",
  "spg-preprimary": "pre-primary.html",
  "spg-primary": "primary.html",
  "spg-middle": "middle.html",
  "spg-high": "high.html"
};

/* Compatibility for saved links to the former index.html subpages. */
if (SCHOOL_PAGE === "home") {
  function redirectLegacyPage() {
    const file = SCHOOL_ROUTES[window.location.hash.slice(1)];
    if (file) window.location.replace(file + window.location.search);
  }
  redirectLegacyPage();
  window.addEventListener('hashchange', redirectLegacyPage);
}

/* <script data-inlined-source="js/language.js"> (original line 21233) */


const INLINE_TRANSLATIONS = {"en":{"meta":{"siteTitle":"Dr. Mar Theophilus School","homeTitle":"St. Mary's School","skipLink":"Skip to content","leaderTitle":"Principal Message | Dr. Mar Theophilus School"},"langSwitcher":{"buttonLabel":"English","english":"English","marathi":"मराठी"},"header":{"location":"Pune","contact":{"callAriaLabel":"Call us","emailAriaLabel":"Email us","findAriaLabel":"Find us"},"social":{"facebook":"Facebook","instagram":"Instagram","youtube":"YouTube"},"nav":{"home":"Home","about":"About Us","ourSchool":"Our School","principal":"Principal Message","management":"Management","vision":"Vision & Mission","motto":"Our Motto","admissions":"Admissions","admissionProcess":"Admission Process","academics":"Academics","studentsCorner":"Students Community","gallery":"Gallery","contact":"Contact"},"login":{"button":"Login","title":"Login","emailLabel":"Email","emailPlaceholder":"Enter email","passwordLabel":"Password","passwordPlaceholder":"Enter password","submit":"Login","signUp":"Sign Up","forgotPassword":"Forgot Password?"},"noticeBar":{"label":"Notice","closeAriaLabel":"Close notice bar","item1":"Admissions Open for 2027–28 — Contact the school office for details.","item2":"Summer Vacation will be from 1st May to 3rd June 2027.","item3":"Visit the Events page for the complete school calendar and holiday list."}},"footer":{"tagline":"Empowering young minds through academic excellence, discipline, creativity and holistic development in a nurturing environment.","links":{"title":"Our Links","home":"Home","about":"About Us","notice":"Notice","gallery":"Gallery"},"addons":{"title":"Add-ons","studentCorner":"Student Corner","admissionForms":"Admission Forms","events":"Events","contact":"Contact Us","history":"History"},"contact":{"title":"Contact Us","addressHtml":"D.P. Road, Chinchvali Shekin,<br>Maharashtra, Pune-410203"},"notice":{"buttonLabel":"Notice","title":"Latest Notice","subtitle":"Important school announcements","badgeNew":"NEW","ganeshTitle":"Ganesh Chaturthi Holidays","ganeshTextHtml":"School will remain closed from<span class=\"notice-highlight\">12th September</span>to<span class=\"notice-highlight\">19th September 2026</span>for Ganesh Chaturthi.","datesheet16Title":"Term I Examination – Class I to VI","datesheet16TextHtml":"Term I Exams will be conducted from<span class=\"notice-highlight\">22 September to <br>1 October 2026</span>.<span class=\"notice-highlight\"><br>21 September</span>will be Preparatory Leave. <br>Exams begin on<span class=\"notice-highlight\">22 September 2026</span>, with timings from<span class=\"notice-highlight\"><br>8:30 a.m. to 12:00 noon</span>and reporting at<span class=\"notice-highlight\">8:20 a.m.</span>","datesheetPrePrimaryTitle":"Term I Examination – Nursery to Sr. KG","datesheetPrePrimaryTextHtml":"Term I Exams will be conducted from<span class=\"notice-highlight\">22 September to <br>1 October 2026.</span><span class=\"notice-highlight\"><br>21 September</span>will be Preparatory Leave. <br>Exams begin on<span class=\"notice-highlight\">22 September 2026</span>, with school timings from<span class=\"notice-highlight\">8:30 a.m. to 12:00 noon</span>and reporting at<span class=\"notice-highlight\">8:20 a.m.</span>","viewPdf":"View PDF","admission2728Title":"Admissions Open 2027–28","admission2728TextHtml":"Admissions are now open for the academic year<span class=\"notice-highlight\">2027–28</span>for Nursery to Class VII. Limited seats available — apply now to secure your child's future.","applyNow":"Apply Now","admissionsTitle":"Admissions Open 2026–27","admissionsText":"Admissions are now open for the academic year 2026–27. Contact the school office for details.","readMore":"Read More","timingsTitle":"Revision of School Timings","timingsTextHtml":"Dear Parents,<br>Greetings from Dr. Mar Theophilus School! This is to inform you that, with effect from Monday, 13th July, 2026, the school timings have been revised as follows:<br><br><strong>Nursery to Senior KG:</strong> 8:20 a.m. &ndash; 12:30 p.m.<br><strong>Classes I to VI:</strong> 8:20 a.m. &ndash; 2:30 p.m."},"bottom":{"copyright":"Copyright © St Mary's Public School 2025. All rights reserved. Designed by Bezalel Creatifo","privacy":"Privacy Policy","terms":"Terms Of Service","legal":"Legal"},"scrollTopAriaLabel":"Scroll to top"},"home":{"hero":{"titleLine1":"Nurturing Minds.","titleLine2":"Building Futures.","quotes":["Educating values to students — Lead from Darkness to Light","The beautiful thing about learning is that no one can take it away from you","Education is the most powerful weapon you can use to change the world","Learning is a treasure that will follow its owner everywhere"],"btnDiscover":"Discover Our School","btnAdmissions":"Admissions Open 2027-28"},"about":{"tag":"ABOUT US","titleHtml":"Welcome to <br>Dr. Mar Theophilus School","textHtml":"At Dr. Mar Theophilus School, Pune, we are committed to providing world-class education that nurtures young minds and builds confident, compassionate leaders of tomorrow.<br>We combine traditional values with modern teaching methodologies to create a learning environment where every child thrives.","btn":"Learn More About Us"},"cards":{"curriculum":{"title":"Curriculum","text":"Our curriculum encourages creativity, critical thinking and academic excellence.","link":"Explore"},"holistic":{"title":"Holistic Development","text":"Sports, arts and activities that shape confident and well-rounded individuals.","link":"Explore"},"admissions":{"title":"Admissions","text":"Simple admission process with guidance for every parent and student.","link":"View Details"}},"highlights":{"title":"The Future Begins Here"},"whyChoose":{"tag":"WHY CHOOSE US","title":"Excellence in Every Aspect","subtitle":"We provide a comprehensive educational experience that prepares students for success in academics and life.","card1":{"title":"Academic Excellence","text":"Comprehensive curriculum designed to nurture critical thinking and innovation"},"card2":{"title":"Experienced Faculty","text":"Dedicated teachers committed to student growth and success"},"card3":{"title":"Smart Classrooms","text":"Modern technology-enabled learning environments"},"card4":{"title":"Sports & Activities","text":"Wide range of extracurricular programs for holistic development"},"card5":{"title":"Moral Values","text":"Character building through ethical education and guidance"},"card6":{"title":"Safe Campus","text":"Secure environment with 24/7 CCTV surveillance"},"card7":{"title":"Transport Facility","text":"Safe and reliable transportation across Pune"},"card8":{"title":"Holistic Development","text":"Balanced focus on academics, sports and personality growth"}},"achievements":{"tag":"OUR TRUST ACHIEVEMENTS","title":"Excellence Across Our Institutions"},"counters":{"boardResults":"Board Results","nationalSports":"National Sports Achievements","culturalAccolades":"Cultural Accolades","alumni":"Alumni"},"events":{"tag":"OUR EVENTS","title":"Memorable School Moments","subtitle":"Celebrating creativity, innovation, sports and culture","graduation":{"badge":"Milestone","title":"Graduation Ceremony","text":"Celebrating young achievers as they step confidently into the next phase of their journey."},"market":{"badge":"Activity","title":"Fruit & Vegetable Market Activity","text":"Hands-on learning through interactive role play experiences."},"christmas":{"badge":"Festival","title":"Christmas Celebration","text":"Festive joy, music and dance that brings smiles to every student."},"annualDay":{"badge":"Annual","title":"Annual Day","text":"An unforgettable showcase of student talent, creativity and cultural performances."},"viewAll":"View All Events"},"testimonials":{"tag":"PARENTS' TESTIMONIALS","title":"Parents Who Believe in Us.","t1":{"text":"\"We are very happy with Dr. Mar Theophilus School. My daughter, Evana Vinay Vattappillil (Grade 2-A), loves coming to school every day. The teachers are caring, supportive, and dedicated, creating a positive learning environment that has helped her grow academically and personally. We truly appreciate the efforts of the Principal, teachers, and staff in providing quality education and values. We are proud to be a part of the St. Mary's family.\"","author":"- Mrs. Juliee V Vattappillil"},"t2":{"text":"\"I am very grateful to all teachers, principal, and management of st.Marys school khopoli. Now it's being 4yrs for my son studying in this school and am really very happy n satisfied with his progress and the way he is groomed here. St Mary's school is one of the best schools in khopoli In terms of its ambience education teaching skills and well equipped. All teachers are highly qualified and have a caring staff. Here school provides facilities from smart learning to spacious play ground.. well equipped labs.and safety to children St Mary's school is just not a building but a hub of shaping future leaders. Here excellence meets value... I wish a great success to this school.\"","author":"- Dr Rashmi Gandhi, Parent"},"t3":{"text":"\"We are the proud parents of Arika, a student of LKG at Dr. Mar Theophilus School. Choosing the right school for our child was one of the most important decisions we made, and we are delighted that we chose Dr. Mar Theophilus School. Every day, Arika comes home with a smile, excited to share what she has learned and experienced in class. The teachers are kind, encouraging, and always attentive to each child's needs. We have seen a wonderful improvement in Arika's communication skills, confidence, creativity, and overall personality. The school provides a safe, caring, and joyful environment that makes learning enjoyable for young children. We sincerely thank the Principal, teachers, and the entire school staff for their hard work, dedication, and love towards the students. We are proud to be a part of the Dr. Mar Theophilus School family and wish the school continued success.\"","author":"- Mrs. Reema Agarwal, Parent"}},"institutions":{"tag":"Our Institutions","titleLine1":"Building Futures With","titleLine2":"Excellence & Growth","text":"Empowering students through quality education, values and academic excellence across our network of institutions — nurturing future leaders with compassion, knowledge and integrity.","btn":"Explore All Schools"}},"contact":{"hero":{"title":"Contact Us","subtitleHtml":"We're always here to answer your questions and help you connect with <br>Dr. Mar Theophilus School."},"getInTouch":"GET IN TOUCH","startConversation":"Let's Start a Conversation","mainText":"Whether you have admission inquiries, academic questions, or general feedback, our team is ready to assist you.","cards":{"address":{"title":"School Address","textHtml":"Dr. Mar Theophilus School,<br>D.P. Road , Chinchvali Shekin , Pune -410203"},"phone":{"title":"Phone Number"},"email":{"title":"Email Address"},"hours":{"title":"Office Hours","textHtml":"Monday - Saturday<br>9:00 AM – 1:00 PM"}},"form":{"title":"Send a Message","subtitle":"Fill out the form below and our team will get back to you shortly.","namePlaceholder":"Your Name","emailPlaceholder":"Email Address","phonePlaceholder":"Phone Number","subjectPlaceholder":"Subject","messagePlaceholder":"Write your message...","submit":"Send Message","successMessage":"Thank you! Your message has been sent."}},"gallery":{"hero":{"title":"School Gallery","subtitle":"Celebrating Sports, Annual Day & Special Events"},"filters":{"all":"All","academics":"Academics","sports":"Sports","events":"Events","activities":"Activities","allYears":"All Years"},"captions":{"sportsDay":"Sports Day","sportsPrizeDistribution":"Sports Prize Distribution","christmasCelebration":"Christmas Celebration","childrensDayCelebration":"Childrens Day Celebration","independenceDayCelebration":"Independence Day Celebration","annualDay":"Annual Day","diwaliCelebration":"Diwali Celebration","schoolPicnic":"School Picnic","graduationCeremony":"Graduation Ceremony","marketActivity":"Fruit & Vegetable Market Activity","ashadhiEkadashi":"Ashadhi Ekadashi","rakshabandhanCelebration":"Raksha Bandhan Celebration","investitureCeremony":"Investiture Ceremony","doctorsDayCelebration":"Doctors Day Celebration"}},"events":{"hero":{"title":"School Event Calendar","subtitle":"Explore academic activities, celebrations, competitions, exams and important school events for both Pre-Primary and Primary sections — Session 2026–27."},"sidebar":{"selectMonth":"Select Month","selectMonthDesc":"Events are shown for the selected month and the following month.","selectSection":"Select Section","selectSectionDesc":"Switch between Pre-Primary and Primary event schedules.","prePrimary":"Pre-Primary","primary":"Primary","prePrimarySection":"Pre-Primary Section","primarySection":"Primary Section"},"session":"Session 2026–27","prePrimary":{"title":"Pre-Primary Programme Schedule","desc":"Nursery, Junior KG and Senior KG activities including celebrations, competitions, classroom learning events, PTM schedules, annual functions and Term examinations — Session 2026–27.","examTitle":"Examination Schedule — Pre-Primary","examSub":"Marydale Pre-Primary School, Pune","examClass":"Class: Nursery – Sr. KG"},"primary":{"title":"Primary Programme Schedule","desc":"Academic schedules and activities for Standards I to VI including competitions, celebrations, Term-I & Term-II examinations, PTM events and annual school programmes — Session 2026–27.","examTitle":"Examination Schedule — Primary","examSub":"Dr. Mar Theophilus School, Pune","examClass":"Class: I – VI"},"exam":{"pe1":"Periodic Evaluation – 1","pe2":"Periodic Evaluation – 2","pe3":"Periodic Evaluation – 3","pe4":"Periodic Evaluation – 4","pe5":"Final Evaluation – 5","pa1":"Periodic Assessment – 1","pa2":"Periodic Assessment – 2","pa3":"Periodic Assessment – 3","pa4":"Periodic Assessment – 4","pa5":"Periodic Assessment – 5","term1":"Term – I Examination","term2":"Term – II Examination","summerHomeworkNote":"Summer Vacation Integrated Homework","xmasHomeworkNote":"Christmas Break Homework"},"holidayList":{"title":"Complete Holiday List 2026–27","schools":"Dr. Mar Theophilus School & Marydale Pre-Primary School, Pune","note":"Vacations are subject to change depending on notification from the Department.","months":{"may2026":"May 2026","june2026":"June 2026","august2026":"August 2026","september2026":"September 2026","october2026":"October 2026","november2026":"November 2026","december2026":"December 2026","january2027":"January 2027","february2027":"February 2027","march2027":"March 2027","april2027":"April 2027"}},"holidays":{"bakriEid":"Bakri Eid","muharram":"Muharram","eidEMilad":"Eid-e-Milad","rakshaBandhan":"Raksha Bandhan","janmashtami":"Janmashtami","ganpatiHolidays":"Ganpati Holidays","anantChaturdashi":"Anant Chaturdashi","gandhiJayanti":"Gandhi Jayanti","dussehra":"Dussehra","diwaliBreak":"Diwali Break","guruNanakJayanti":"Guru Nanak Jayanti","christmasHolidays":"Christmas Holidays","makarSankranti":"Makar Sankranti","shivajiMaharajJayanti":"Chh. Shivaji Maharaj Jayanti","mahaShivaratri":"Maha Shivaratri","ramzanEid":"Ramzan Eid","holi":"Holi","maundyThursday":"Maundy Thursday","worldSpiritDay":"World Spirit Day","gudiPadwa":"Gudi Padwa","ambedkarJayanti":"Ambedkar Jayanti","ramNavami":"Ram Navami","mahavirJayanti":"Mahavir Jayanti"},"calendar":{"2026-04":{"name":"April 2026","pp":{"0":{"title":"Commencement of New Session – Welcome Activity","desc":"Commencement of Session & Welcome Activity."},"1":{"title":"Parent Orientation Meetings","desc":"Class-wise orientation for parents (13th–17th April)."},"2":{"title":"Learn By Doing – Municipality Visit","desc":"Educational visit to Municipality, Pune."},"3":{"title":"Vegetable & Fruit Market Activity","desc":"Interactive classroom learning experience."},"4":{"title":"Parent Teacher Meeting","desc":"PTM for all Pre-Primary classes."}},"pr":{"0":{"title":"Commencement of New Session – Welcome Activity","desc":"Commencement of Session & Welcome Activity."},"1":{"title":"Parent Orientation Meetings","desc":"Class-wise orientation for parents (13th–17th April)."},"2":{"title":"Learn By Doing – Municipality Visit","desc":"Educational visit to Municipality, Pune."},"3":{"title":"Vegetable & Fruit Market Activity","desc":"Interactive classroom learning experience."},"4":{"title":"Parent Teacher Meeting","desc":"PTM for all Primary classes."}}},"2026-05":{"name":"May 2026","pp":{"0":{"title":"Summer Vacation Begins","desc":"School closes for summer vacation (1st May – 7th June, 2026)."}},"pr":{"0":{"title":"Summer Vacation & Integrated Homework","desc":"Periodic Assessment-1: Summer vacation homework (1st May – 3rd June, 2026)."}}},"2026-06":{"name":"June 2026","pp":{"0":{"title":"School Reopens","desc":"Re-opening of school after summer vacation."},"1":{"title":"Academic Activity","desc":"Interactive learning activity."},"2":{"title":"Yoga Day – Mental Wellness Session","desc":"Counselling session on mental wellness & Yoga Day celebration."},"3":{"title":"Fun Activity","desc":"Monsoon-themed fun learning activity."}},"pr":{"0":{"title":"School Reopens","desc":"Re-opening of school after summer vacation."},"1":{"title":"Election Campaign – School Council","desc":"Leadership election campaign activity."},"2":{"title":"Yoga Day – Mental Wellness Session","desc":"Counselling session on mental wellness & Yoga Day celebration."},"3":{"title":"School Council Election Day","desc":"Students vote for school council representatives."},"4":{"title":"Investiture Ceremony","desc":"Installation of School Council for 2026–27."}}},"2026-07":{"name":"July 2026","pp":{"0":{"title":"Doctor's Day – Role Play Activity","desc":"Fun role-play and awareness activity."},"1":{"title":"Sharing Is Caring – Activity","desc":"Friendship and values-based activity."},"2":{"title":"Aashadi Ekadashi – Celebration","desc":"Cultural and spiritual celebration."},"3":{"title":"Periodic Evaluation – 1 Begins","desc":"Assessment from 24th July – 31st July, 2026."}},"pr":{"0":{"title":"Solo Singing – House Activity","desc":"Music and cultural competition."},"1":{"title":"World Population Day – Activity","desc":"Awareness programme."},"2":{"title":"Ashadi Ekadashi – Celebration","desc":"Cultural and spiritual celebration."},"3":{"title":"Periodic Assessment – 2 Begins","desc":"Assessment from 24th July – 31st July, 2026."}}},"2026-08":{"name":"August 2026","pp":{"0":{"title":"English Rhyme Competition","desc":"Stage activity for Pre-Primary students."},"1":{"title":"Parent Teacher Meeting","desc":"PTM for all Pre-Primary classes."},"2":{"title":"Independence Day Celebration","desc":"Patriotic celebration programme."},"3":{"title":"Fun Fair (Anand Mela)","desc":"Annual school fair and fun activities."},"4":{"title":"Raksha Bandhan Celebration","desc":"Festival celebration activity."},"5":{"title":"Know Your Helpers – Activity","desc":"Community helpers awareness activity."}},"pr":{"0":{"title":"House Activity – Drawing Competition","desc":"Inter-house drawing and art competition."},"1":{"title":"Parent Teacher Meeting","desc":"PTM for all Primary classes."},"2":{"title":"Independence Day Celebration","desc":"Patriotic celebration programme."},"3":{"title":"Fun Fair (Anand Mela)","desc":"Annual school fair and fun activities."},"4":{"title":"Raksha Bandhan Celebration","desc":"Festival celebration programme."},"5":{"title":"Girls' Health & Wellness Session","desc":"Health awareness session for girls."}}},"2026-09":{"name":"September 2026","pp":{"0":{"title":"Periodic Evaluation – 2 Begins","desc":"Assessment from 2nd Sept – 11th Sept, 2026."},"1":{"title":"Krishna Janmashtami – Celebration","desc":"Gopalkala and cultural celebration."},"2":{"title":"Teachers' Day Celebration","desc":"School function honouring teachers."},"3":{"title":"Ganpati Utsav Break","desc":"School holiday: 14th Sept – 21st Sept, 2026."}},"pr":{"0":{"title":"Term – I Examination Begins","desc":"Term-I Exam: 2nd Sept – 11th Sept, 2026."},"1":{"title":"Shree Krishna Janmashtami – Activity","desc":"Cultural activity and celebration."},"2":{"title":"Teachers' Day Celebration","desc":"School function honouring teachers."},"3":{"title":"Ganpati Utsav Break","desc":"School holiday: 14th Sept – 21st Sept, 2026."},"4":{"title":"House Activity – Quiz Competition","desc":"Inter-house academic quiz competition."}}},"2026-10":{"name":"October 2026","pp":{"0":{"title":"Gandhi Jayanti – All Religious Prayer Sabha","desc":"School prayer gathering and Gandhi Jayanti celebration."},"1":{"title":"Activity","desc":"Scheduled classroom activity."},"2":{"title":"Founder's Day Celebration","desc":"Annual Founder's Day school function."},"3":{"title":"Parent Teacher Meeting","desc":"PTM for all Pre-Primary classes."},"4":{"title":"Navratri Celebration","desc":"Cultural festival celebration."},"5":{"title":"Counselling Session on Parenting","desc":"Awareness session for parents."}},"pr":{"0":{"title":"Gandhi Jayanti – All Religious Prayer Sabha","desc":"School prayer gathering and Gandhi Jayanti celebration."},"1":{"title":"House Activity – Essay Writing","desc":"Inter-house essay writing competition."},"2":{"title":"Founder's Day – Activity","desc":"Annual Founder's Day celebration."},"3":{"title":"Parent Teacher Meeting","desc":"PTM for all Primary classes."},"4":{"title":"Navratri Celebration","desc":"Cultural festival celebration."},"5":{"title":"Counselling Session on Parenting","desc":"Awareness session for parents."}}},"2026-11":{"name":"November 2026","pp":{"0":{"title":"Diwali Celebration","desc":"Festival of lights celebration in school."},"1":{"title":"Diwali Break","desc":"School holiday: 4th Nov – 16th Nov, 2026."}},"pr":{"0":{"title":"Diwali Celebration","desc":"Festival of lights celebration in school."},"1":{"title":"Diwali Break (School Holiday)","desc":"School holiday: 4th Nov – 16th Nov, 2026."}}},"2026-12":{"name":"December 2026","pp":{"0":{"title":"Sports Week","desc":"Inter-house and school sports events (2nd–5th Dec)."},"1":{"title":"Story Telling Competition","desc":"Creative storytelling activity."},"2":{"title":"School Annual Day Celebration","desc":"Annual Day function — 23rd December, 2026."},"3":{"title":"Christmas & Winter Break","desc":"School holiday: 23rd Dec, 2026 – 1st Jan, 2027."}},"pr":{"0":{"title":"Sports Week","desc":"House-wise sports events (2nd–5th Dec, 2026)."},"1":{"title":"House Activity – Story Telling Competition","desc":"Inter-house storytelling competition."},"2":{"title":"House Activity – Memory Test","desc":"Inter-house memory test activity."},"3":{"title":"School Annual Day Celebration","desc":"Annual Day function — 23rd December, 2026."},"4":{"title":"Christmas & Winter Break","desc":"School holiday: 23rd Dec, 2026 – 1st Jan, 2027."}}},"2027-01":{"name":"January 2027","pp":{"0":{"title":"School Picnic","desc":"Annual school picnic outing."},"1":{"title":"Periodic Evaluation – 4 Begins","desc":"Assessment from 11th Jan – 18th Jan, 2027."},"2":{"title":"Makar Sankranti – Kite Flying Activity","desc":"Festival celebration with kite flying activity."},"3":{"title":"Republic Day Ceremony","desc":"Patriotic event and flag hoisting ceremony."},"4":{"title":"Handwriting Competition","desc":"Academic handwriting competition."}},"pr":{"0":{"title":"School Picnic","desc":"Annual school picnic outing."},"1":{"title":"Periodic Assessment – 5 Begins","desc":"Assessment from 11th Jan – 18th Jan, 2027."},"2":{"title":"Makar Sankranti – Kite Flying Activity","desc":"Festival celebration with kite flying activity."},"3":{"title":"Republic Day Ceremony","desc":"Patriotic event and flag hoisting ceremony."},"4":{"title":"House Activity – Hindi Poetry Competition","desc":"Inter-house Hindi poetry cultural activity."}}},"2027-02":{"name":"February 2027","pp":{"0":{"title":"Activity – Best Out of Waste","desc":"Creative craft activity using waste materials."},"1":{"title":"Parent Teacher Meeting","desc":"PTM for all Pre-Primary classes."}},"pr":{"0":{"title":"Fun Activity","desc":"End-of-year fun activity for students."},"1":{"title":"Parent Teacher Meeting","desc":"PTM for all Primary classes."}}},"2027-03":{"name":"March 2027","pp":{"0":{"title":"Term – II / Final Exam Begins","desc":"Final Evaluation (Exam 5): 1st March – 12th March, 2027."},"1":{"title":"Result & Graduation Day","desc":"Results declared and Graduation Day ceremony."}},"pr":{"0":{"title":"Term – II Examination Begins","desc":"Term-II Exam: 1st March – 12th March, 2027."},"1":{"title":"Result & Graduation Day","desc":"Results declared and Graduation Day ceremony."}}}},"showingRange":"Showing: {range}","noEvents":"No events scheduled this month."},"academics":{"hero":{"title":"Academics","subtitle":"Nurturing excellence through comprehensive education"},"curriculum":{"tag":"OUR CURRICULUM","title":"Academic Sections"},"prePrimary":{"badge":"Nursery - UKG","title":"Pre-Primary","text":"Foundation years focused on play-based learning, sensory development, and basic skills.","list1":"Play-based Learning","list2":"Motor Skill Development","list3":"Activity Centers","list4":"Social Skills"},"primary":{"badge":"Class 1 - 6","title":"Primary","text":"Building strong academic foundations with emphasis on reading, writing, and arithmetic.","list1":"Core Subjects","list2":"Life Skills","list3":"Activity-Based Learning","list4":"Creative Arts"},"holistic":{"tag":"HOLISTIC DEVELOPMENT","title":"Shaping Well-Rounded Individuals","subtitle":"Nurturing confident, compassionate, and well-rounded individuals through a balanced blend of academics, values, creativity, and personal growth."},"holisticCards":{"card1":{"title":"Personality Development","text":"Building confidence, communication skills, and self-expression."},"card2":{"title":"Leadership & Teamwork","text":"Encouraging responsibility, teamwork, and decision-making skills."},"card3":{"title":"Sports & Wellness","text":"Promoting physical fitness, discipline, and healthy lifestyle."},"card4":{"title":"Moral & Value Education","text":"Instilling ethics, empathy, and strong moral values."}},"subjects":{"tag":"SUBJECTS OFFERED","title":"Comprehensive Curriculum"},"subjectNames":{"mathematics":"Mathematics","science":"Science","socialStudies":"Social Studies","english":"English","arts":"Arts & Crafts","music":"Music","computerScience":"Computer Science","physicalEducation":"Physical Education","marathi":"Marathi","hindi":"Hindi"},"facilities":{"tag":"FACILITIES","title":"Learning Infrastructure"},"facilityCards":{"card1":{"title":"Smart Classrooms","text":"Interactive boards and digital learning environment."},"card2":{"title":"Computer Lab","text":"Modern systems for coding and practical learning."},"card3":{"title":"Kids Play Zone","text":"Rich academic books and digital resources."},"card4":{"title":"Sports","text":"Indoor & outdoor sports for fitness and growth."},"card5":{"title":"Science Lab","text":"Modern equipment for hands-on scientific experiments."}}},"admissions":{"hero":{"title":"Admissions","subtitle":"Be part of the marians"},"open":{"title":"Admissions Open for 2027-28","text":"Limited seats available. Apply now to secure your child’s future!","btn":"Apply Now"},"eligibility":{"tag":"ELIGIBILITY","title":"Age Criteria","note":"(As per academic year guidelines)"},"table":{"grade":"Grade","ageRequirement":"Age Requirement","dobRange":"Date of Birth Range"},"grades":{"nursery":"Nursery","lkg":"LKG (Lower Kindergarten)","ukg":"UKG (Upper Kindergarten)","classI":"Class I","classII":"Class II"},"ageValues":{"a3":"3 years on 31-12-2026","a4":"4 years on 31-03-2026","a5":"5 years on 31-03-2026","a6":"6 years on 31-03-2026","classIINote":"Successfully completed Class I from a recognized school"},"dobPrefix":"born between","dobTo":"to","process":{"tag":"ADMISSION PROCESS","title":"How to Apply","subtitle":"Follow these simple steps to complete your child’s admission process"},"steps":{"step1":{"title":"Inquiry & Registration","text":"Fill out the admission inquiry form online or visit our office"},"step2":{"title":"Interaction","text":"Informal interaction with the child and parents"},"step3":{"title":"Document Verification","text":"Submit required documents for verification"},"step4":{"title":"Fee Payment","text":"Pay admission and first term fees"}},"documents":{"tag":"DOCUMENTS","title":"Required Documents","subtitle":"Please keep the following documents ready for the admission process:","downloadBtn":"View Brochure"},"docList":{"birthCert":"Birth Certificate (Original & Photocopy)","transferCert":"Transfer Certificate (TC) from previous school","progressReport":"Progress Report/Report Card from previous school","aadhar":"Aadhar Card (Student & Parents)","photos":"Recent Passport Size Photographs (4 copies)","casteCert":"Caste Certificate (if applicable)","medicalCert":"Medical Certificate","addressProof":"Address Proof (Electricity Bill/Ration Card)"},"faq":{"title":"Frequently Asked Questions","q1":{"q":"When does the admission process start?","a":"The admission process typically begins in December/January for the upcoming academic year. Please contact the school office for exact dates."},"q2":{"q":"What documents are required for admission?","a":"Required documents include: Birth Certificate, Transfer Certificate (TC) from previous school, Aadhar Card, Recent passport-size photographs, Previous year's report card/mark sheet, and Caste certificate (if applicable)."},"q3":{"q":"What is the age criteria for admission?","a":"Age eligibility is calculated as on 31st March of the academic year. For Nursery/LKG: 3-4 years, UKG: 4-5 years, Class I: 5-6 years, and Class II onwards as per CBSE norms."},"q4":{"q":"Are admissions open to all students?","a":"Yes, admissions are open to all children irrespective of caste, creed, or religion, subject to eligibility criteria and seat availability."}},"cta":{"tag":"GET IN TOUCH","title":"Need Help With Admissions?","text":"Our admission team is here to guide you through every step of the process.","contactBtn":"Contact Us","callBtn":"Call Now"}},"studentsCorner":{"hero":{"title":"Student Corner","subtitle":"Your digital space for learning, resources, activities, notices, schedules and everything students need for a connected academic journey at Dr. Mar Theophilus School."},"resources":{"tag":"STUDENT CORNER","title":"Student Resources","desc":"Everything students need in one place."},"login":{"title":"Student Login","desc":"Access your student portal to view academic updates, assignments, attendance, exams, notices and more.","assignments":"Assignments","attendance":"Attendance","exams":"Exams","btn":"Login to Student Portal"},"calendar":{"title":"School Event Calendar","desc":"Pre-Primary and Primary section programme schedules, celebrations, competitions, exams and school activities.","upcomingEvents":"Upcoming Events","btn":"View Event Calendar","noEvents":"No Events","noEventsText":"No events scheduled on this date."},"uniform":{"titleHtml":"School Uniform<br>& Rules","desc":"Know your uniform guidelines, school rules and code of conduct.","btn":"View Uniform & Rules"},"rules":{"uniform":"Uniform Guidelines","discipline":"Discipline Policies","conduct":"Code of Conduct","attendance":"Attendance Rules","grooming":"Grooming Standards","behaviour":"Behaviour Guidelines"},"wellbeing":{"tag":"STUDENT SUPPORT","title":"Well-Being & Safety","desc":"Supporting students with a safe and positive learning environment.","wellness":"Student Wellness","childSafety":"Child Safety","counselling":"Counselling","digitalSafety":"Digital Safety"}},"leader":{"hero":{"title":"Our Leadership","subtitle":"Meet the team dedicated to excellence in education"},"president":{"roleTag":"President, MOCCB","tag":"PRESIDENT'S MESSAGE","title":"A Beacon of Education","p1":"Dear Parents, Students, and Well-wishers,","p2":"It gives me immense pleasure to welcome you to Dr. Mar Theophilus School, Pune. Our vision has always been to create an institution that stands as a beacon of educational excellence.","p3":"Education is not merely about academic achievement; it is about building character, instilling values, and preparing children for the future with confidence and compassion.","p4":"I am confident that with the support of parents, teachers, and management, our students will continue to excel in all aspects of life.","blessing":"May God bless us all."},"vp":{"roleTag":"Vice President, MOCCB","tag":"VICE PRESIDENT'S MESSAGE","title":"Empowering our children to become responsible citizens","p1":"In this rapidly changing world, quality education is the cornerstone of growth, and sustenance. It serves as the compass that guides one to navigate the complexities and challenges of modern life. True education extends beyond the walls of a classroom and goes beyond mere acquisition of facts and knowledge; it forms of wisdom, resilience, integrity, and compassion. Such an education empowers our children to become responsible citizens, thoughtful leaders, and compassionate servants of society.","p2":"Through this noble journey of learning, let us remain committed to nurturing not only intellectual excellence but also strong moral and spiritual values. May this institute inspire every student to pursue truth with humility, face challenges with courage, and use their God-given talents for the well-being of others.","p3":"I extend my heartfelt blessings and best wishes to all our students, teachers, parents, and families. May your educational journey always be filled with the joy of discovery, the perseverance to overcome every challenge, and the grace of Almighty God to grow continually in knowledge, wisdom, faith, and character."},"committee":{"tag":"LEADERSHIP TEAM","title":"The Leadership","desc":"Our dedicated committee members guide the school's vision and strategic direction."},"roles":{"president":"President","vicePresident":"Vice-President","secretary":"Secretary","ceo":"Chief Executive Officer","dyCeo":"Dy. CEO","committeeChairman":"School Committee Chairman"},"heritage":{"tag":"Our Institutions","title":"Heritage & Educational Excellence","desc":"Empowering students through quality education, values and academic excellence across our network of institutions.","visitWebsite":"Visit Website"},"boardTags":{"state":"STATE","jrCollege":"JR. COLLEGE","management":"MANAGEMENT"},"principal":{"roleTag":"Principal","tag":"PRINCIPAL'S MESSAGE","title":"From Principal's Desk","p1":"Dear Parents and Students,","p2":"It is my privilege to welcome you to Dr. Mar Theophilus School, where we believe that every child is unique and deserves the best education possible. Our dedicated faculty and staff work tirelessly to create an environment that fosters academic excellence, personal growth, and character development.","p3":"We understand that education is a partnership between school and home. Together, we can help our students reach their full potential and prepare them for the challenges and opportunities that lie ahead.","p4":"I invite you to explore our programs and discover the many opportunities we offer. We look forward to welcoming you to our school community."}},"aboutUs":{"hero":{"title":"About Our School","subtitle":"Building a peaceful, progressive and open-minded Global Community"},"quote":{"text":"\"Learning is a result of listening, which leads to even better listening and attentiveness to the other person. In other words, we must have empathy to learn from the child, and empathy grows as we learn.\"","author":"— Alice Miller, Polish-Swiss Psychologist, Psychoanalyst and Philosopher"},"philosophy":{"tag":"OUR PHILOSOPHY","title":"Education with Values","textHtml":"We at Dr. Mar Theophilus School, Pune try to teach these attributes and values to our children through various activities. We believe that by learning and following these values, we can bring a radical change in our society.<br><br>Dr. Mar Theophilus School is dedicated to offering education that emphasizes not only academic skills but also moral values, discipline, and extracurricular activities. The institution caters to students from pre-primary to primary level following a curriculum that prepares them for the challenges of higher education and life beyond school."},"history":{"tag":"HISTORY","title":"A Vision Realized","subtitle":"The story of Dr. Mar Theophilus School is one of vision, dedication and commitment to educational excellence in Pune.","visionaryTitle":"The Visionary","visionaryText":"H.G. Geevarghese Mar Coorilos, President of the MOCCB.","establishmentTitle":"Year of Establishment","proposedTitle":"Proposed","proposedText":"CBSE Board - Central Board of Secondary Education"},"dates":{"estDate":"12th June 2019"},"journey":{"title":"Our Journey","p1Html":"Dr. Mar Theophilus School, Pune is the vision of H.G. Geevarghese Mar Coorilos, the President of The Malankara Orthodox Church Council of Bombay (MOCCB). Envisioned as the first step towards both diversifying the curriculums of, and also providing a complete education from KG to PG to the region of Pune; and to ultimately be the beacon of educational excellence which would help in the growth and upliftment for the entire region.","p2Html":"This land was bought back in 2018 - at a time when the industrial area of Pune predominantly had educational institutes following the curriculum of the State Board of Maharashtra (SSC). And its humble beginning on 12th June, 2019 simply marks the turning of this wonderful dream into a reality.","p3":"St. Mary's Pune thrives under the able guidance of its management, unceasing support of the parents and skillful teaching and non-teaching staff. As an institution, we work harder each day to fulfill this vision entrusted to us by our visionary leader, striving to become a better version of ourselves; while simultaneously encouraging our students to do the same - to follow their dreams and improving themselves with each day."},"motto":{"tag":"OUR MOTTO","line1":"In Wisdom and Grace,","line2":"We Rise"},"vm":{"tag":"OUR PURPOSE","title":"Vision & Mission","subtitle":"Guided by strong values and a passion for excellence, we nurture confident learners with knowledge, compassion, leadership and integrity.","visionTitleHtml":"Our <span>Vision</span>","visionText":"To be a beacon of excellence in education — where young minds are nurtured to shine with knowledge, moulded through holistic learning rooted in values, guided by faith, and driven by purpose—ready to lead, serve, and shape a better world.","missionTitleHtml":"Our <span>Mission</span>","mission1":"We nurture every child in a safe, inclusive, and intellectually stimulating environment.","mission2":"Through innovative teaching and holistic activities, we ignite curiosity and build self-confidence.","mission3":"We uphold secular values, cultural appreciation, and environmental consciousness.","mission4":"Our mission is to shape socially responsible citizens committed to human rights and national progress."},"approach":{"tag":"OUR APPROACH","title":"Activity-Based Learning","subtitle":"We focus on experiential learning through workshops, activities and practical exposure that strengthen creativity and critical thinking.","card1":"Practical Learning","card2":"Value Education","card3":"Collaborative","card4":"Innovative"},"principal":{"roleTag":"Principal","tag":"PRINCIPAL'S MESSAGE","title":"From Principal's Desk","p1":"Dear Parents and Students,","p2":"It is my privilege to welcome you to Dr. Mar Theophilus School, where we believe that every child is unique and deserves the best education possible. Our dedicated faculty and staff work tirelessly to create an environment that fosters academic excellence, personal growth, and character development.","p3":"We understand that education is a partnership between school and home. Together, we can help our students reach their full potential and prepare them for the challenges and opportunities that lie ahead.","p4":"I invite you to explore our programs and discover the many opportunities we offer. We look forward to welcoming you to our school community."}},"brand":{"line1":"ST. MARY'S","line2":"PUBLIC SCHOOL"}},"mr":{"meta":{"siteTitle":"डॉ. मार थिओफिलस शाळा","homeTitle":"डॉ. मार थिओफिलस शाळा","skipLink":"मुख्य मजकुराकडे जा","leaderTitle":"मुख्याध्यापकांचा संदेश | डॉ. मार थिओफिलस शाळा"},"langSwitcher":{"buttonLabel":"मराठी","english":"English","marathi":"मराठी"},"header":{"location":"पुणे","contact":{"callAriaLabel":"आम्हाला कॉल करा","emailAriaLabel":"आम्हाला ईमेल करा","findAriaLabel":"आम्हाला शोधा"},"social":{"facebook":"फेसबुक","instagram":"इन्स्टाग्राम","youtube":"यूट्यूब"},"nav":{"home":"मुख्यपृष्ठ","about":"आमच्याविषयी","ourSchool":"आमची शाळा","leadership":"नेतृत्व","admissions":"प्रवेश प्रक्रिया","admissionProcess":"प्रवेश प्रक्रिया माहिती","academics":"शैक्षणिक विभाग","studentsCorner":"विद्यार्थी कोपरा","gallery":"छायाचित्र दालन","contact":"संपर्क","principal":"मुख्याध्यापकांचा संदेश","management":"व्यवस्थापन","vision":"दृष्टिकोन व ध्येय","motto":"आमचे ब्रीदवाक्य"},"login":{"button":"लॉगिन","title":"लॉगिन","emailLabel":"ईमेल","emailPlaceholder":"ईमेल टाका","passwordLabel":"पासवर्ड","passwordPlaceholder":"पासवर्ड टाका","submit":"लॉगिन करा","signUp":"नोंदणी करा","forgotPassword":"पासवर्ड विसरलात?"},"noticeBar":{"label":"सूचना","closeAriaLabel":"सूचना पट्टी बंद करा","item1":"सन २०२७–२८ साठी प्रवेश सुरू आहेत — अधिक माहितीसाठी शाळेच्या कार्यालयाशी संपर्क साधा.","item2":"उन्हाळी सुट्टी १ मे ते ३ जून २०२७ या कालावधीत असेल.","item3":"संपूर्ण शालेय दिनदर्शिका व सुट्ट्यांच्या यादीसाठी इव्हेंट्स पान पहा."}},"footer":{"tagline":"शैक्षणिक उत्कृष्टता, शिस्त, सर्जनशीलता आणि सर्वांगीण विकासाच्या माध्यमातून पोषक वातावरणात बालमनांना सक्षम करणे.","links":{"title":"उपयुक्त दुवे","home":"मुख्यपृष्ठ","about":"आमच्याविषयी","notice":"सूचना","gallery":"छायाचित्र दालन"},"addons":{"title":"अधिक पर्याय","studentCorner":"विद्यार्थी कोपरा","admissionForms":"प्रवेश अर्ज","events":"शालेय उपक्रम","contact":"संपर्क","history":"इतिहास"},"contact":{"title":"संपर्क करा","addressHtml":"स नं. 14/1, धानोरी गाव, धानोरी,<br>महाराष्ट्र, पुणे-411015"},"notice":{"buttonLabel":"सूचना","title":"ताजी सूचना","subtitle":"महत्त्वाच्या शालेय घोषणा","badgeNew":"नवीन","ganeshTitle":"गणेश चतुर्थी सुट्टी","ganeshTextHtml":"शाळा गणेश चतुर्थीनिमित्त<span class=\"notice-highlight\">१२ सप्टेंबर</span>ते<span class=\"notice-highlight\">१९ सप्टेंबर २०२६</span>पर्यंत बंद राहील.","datesheet16Title":"सत्र १ परीक्षा – इयत्ता १ ली ते ६ वी","datesheet16TextHtml":"सत्र १ परीक्षा<span class=\"notice-highlight\">२२ सप्टेंबर ते १ ऑक्टोबर २०२६</span>या कालावधीत घेतली जाईल.<span class=\"notice-highlight\"><br>२१ सप्टेंबर</span>हा दिवस पूर्वतयारी सुट्टी असेल. <br>परीक्षा<span class=\"notice-highlight\">२२ सप्टेंबर २०२६</span>पासून सुरू होतील, वेळ<span class=\"notice-highlight\"><br>सकाळी ८:३० ते १२:००</span>आणि उपस्थितीची वेळ<span class=\"notice-highlight\">सकाळी ८:२०</span>असेल.","datesheetPrePrimaryTitle":"सत्र १ परीक्षा – नर्सरी ते सिनियर केजी","datesheetPrePrimaryTextHtml":"सत्र १ परीक्षा<span class=\"notice-highlight\">२२ सप्टेंबर ते १ ऑक्टोबर २०२६.</span><span class=\"notice-highlight\"><br>२१ सप्टेंबर</span>हा दिवस पूर्वतयारी सुट्टी असेल. <br>परीक्षा<span class=\"notice-highlight\">२२ सप्टेंबर २०२६</span>पासून सुरू होतील, शाळेची वेळ<span class=\"notice-highlight\">सकाळी ८:३० ते १२:००</span>आणि उपस्थितीची वेळ<span class=\"notice-highlight\">सकाळी ८:२०</span>असेल.","viewPdf":"पीडीएफ पहा","admission2728Title":"प्रवेश सुरू आहे २०२७–२८","admission2728TextHtml":"शैक्षणिक वर्ष<span class=\"notice-highlight\">२०२७–२८</span>साठी नर्सरी ते इयत्ता सातवीपर्यंत प्रवेश सुरू झाले आहेत. मर्यादित जागा उपलब्ध — आपल्या मुलाचे भविष्य सुरक्षित करण्यासाठी आजच अर्ज करा.","applyNow":"आताच अर्ज करा","admissionsTitle":"प्रवेश सुरू आहे 2026–27","admissionsText":"शैक्षणिक वर्ष 2026–27 साठी प्रवेश प्रक्रिया सुरू झाली आहे. अधिक माहितीसाठी शालेय कार्यालयाशी संपर्क साधा.","readMore":"अधिक वाचा","timingsTitle":"शालेय वेळेत सुधारणा","timingsTextHtml":"प्रिय पालक,<br>डॉ. मार थिओफिलस शाळाकडून सस्नेह अभिवादन! आपणास कळविण्यात येत आहे की, सोमवार, १३ जुलै २०२६ पासून शाळेच्या वेळेत खालीलप्रमाणे सुधारणा करण्यात आली आहे:<br><br><strong>नर्सरी ते सिनियर केजी:</strong> सकाळी ८:२० ते दुपारी १२:३०<br><strong>इयत्ता पहिली ते सहावी:</strong> सकाळी ८:२० ते दुपारी २:३०"},"bottom":{"copyright":"सर्व हक्क सुरक्षित © डॉ. मार थिओफिलस शाळा, पुणे 2025. डिझाईन: Bezalel Creatifo","privacy":"गोपनीयता धोरण","terms":"सेवा अटी","legal":"कायदेशीर माहिती"},"scrollTopAriaLabel":"वर जा"},"home":{"hero":{"titleLine1":"ज्ञानाची जोपासना,","titleLine2":"उज्ज्वल भविष्याची निर्मिती.","quotes":["विद्यार्थ्यांना मूल्यशिक्षण — अंधःकाराकडून प्रकाशाकडे नेणारे शिक्षण","शिकण्याची सर्वात सुंदर गोष्ट म्हणजे ते कोणीही तुमच्यापासून हिरावून घेऊ शकत नाही","शिक्षण हे जग बदलण्यासाठीचे सर्वात प्रभावी शस्त्र आहे","ज्ञान हा असा खजिना आहे जो सदैव आपल्या मालकासोबत राहतो"],"btnDiscover":"आमची शाळा जाणून घ्या","btnAdmissions":"प्रवेश सुरू आहे २०२७–२८"},"about":{"tag":"आमच्याविषयी","titleHtml":"डॉ. मार थिओफिलस शाळामध्ये<br>आपले स्वागत आहे","textHtml":"डॉ. मार थिओफिलस शाळा, खोपोली येथे आम्ही जागतिक दर्जाचे शिक्षण देण्यासाठी कटिबद्ध आहोत, जे बालमनांचे पोषण करते आणि उद्याचे आत्मविश्वासू व दयाळू नेतृत्व घडवते.<br>पारंपरिक मूल्ये आणि आधुनिक अध्यापन पद्धती यांचा संगम साधून आम्ही असे शिक्षण-वातावरण निर्माण करतो, जिथे प्रत्येक मूल यशस्वी होते.","btn":"अधिक जाणून घ्या"},"cards":{"curriculum":{"title":"अभ्यासक्रम","text":"आमचा अभ्यासक्रम सर्जनशीलता, चिकित्सक विचारसरणी आणि शैक्षणिक उत्कृष्टतेला प्रोत्साहन देतो.","link":"अधिक पहा"},"holistic":{"title":"सर्वांगीण विकास","text":"क्रीडा, कला आणि विविध उपक्रमांद्वारे आत्मविश्वासू व सर्वांगीण व्यक्तिमत्त्व घडवले जाते.","link":"अधिक पहा"},"admissions":{"title":"प्रवेश प्रक्रिया","text":"प्रत्येक पालक आणि विद्यार्थ्यासाठी सुलभ प्रवेश प्रक्रिया आणि योग्य मार्गदर्शन.","link":"सविस्तर माहिती पहा"}},"highlights":{"title":"भविष्याची सुरुवात येथूनच"},"whyChoose":{"tag":"आम्हाला का निवडावे","title":"प्रत्येक क्षेत्रात उत्कृष्टता","subtitle":"आम्ही सर्वसमावेशक शैक्षणिक अनुभव देतो, जो विद्यार्थ्यांना शैक्षणिक आणि जीवनातील यशासाठी सज्ज करतो.","card1":{"title":"शैक्षणिक उत्कृष्टता","text":"चिकित्सक विचारसरणी आणि नवोपक्रमाला चालना देणारा सर्वसमावेशक अभ्यासक्रम"},"card2":{"title":"अनुभवी शिक्षकवर्ग","text":"विद्यार्थ्यांच्या प्रगती आणि यशासाठी समर्पित शिक्षकवर्ग"},"card3":{"title":"स्मार्ट वर्गखोल्या","text":"आधुनिक तंत्रज्ञानाने सुसज्ज अध्ययन वातावरण"},"card4":{"title":"क्रीडा व उपक्रम","text":"सर्वांगीण विकासासाठी विविध सहशालेय उपक्रम"},"card5":{"title":"नैतिक मूल्ये","text":"नैतिक शिक्षण व मार्गदर्शनाद्वारे चारित्र्य घडवणी"},"card6":{"title":"सुरक्षित परिसर","text":"24/7 सीसीटीव्ही देखरेखीसह सुरक्षित वातावरण"},"card7":{"title":"वाहतूक सुविधा","text":"खोपोली परिसरात सुरक्षित व विश्वासार्ह वाहतूक सुविधा"},"card8":{"title":"सर्वांगीण विकास","text":"अभ्यास, क्रीडा आणि व्यक्तिमत्त्व विकासावर समतोल भर"}},"achievements":{"tag":"आमच्या ट्रस्टची कामगिरी","title":"आमच्या सर्व संस्थांमधील उत्कृष्टता"},"counters":{"boardResults":"बोर्ड निकाल","nationalSports":"राष्ट्रीय क्रीडा कामगिरी","culturalAccolades":"सांस्कृतिक पुरस्कार","alumni":"माजी विद्यार्थी"},"events":{"tag":"आमचे उपक्रम","title":"संस्मरणीय शालेय क्षण","subtitle":"सर्जनशीलता, नवोपक्रम, क्रीडा आणि संस्कृतीचा उत्सव","graduation":{"badge":"महत्त्वाचा टप्पा","title":"पदवीदान समारंभ","text":"आत्मविश्वासाने पुढील टप्प्यात पदार्पण करणाऱ्या यशस्वी विद्यार्थ्यांचा गौरव."},"market":{"badge":"उपक्रम","title":"फळे व भाजीपाला बाजार उपक्रम","text":"प्रत्यक्ष कृतीतून आणि भूमिका-अभिनयातून शिकण्याचा अनुभव."},"christmas":{"badge":"सण","title":"नाताळ साजरा","text":"उत्सवाचा आनंद, संगीत आणि नृत्य यामुळे प्रत्येक विद्यार्थ्याच्या चेहऱ्यावर हास्य."},"annualDay":{"badge":"वार्षिक","title":"वार्षिक स्नेहसंमेलन","text":"विद्यार्थ्यांची कला, सर्जनशीलता आणि सांस्कृतिक सादरीकरण यांचे संस्मरणीय दर्शन."},"viewAll":"सर्व उपक्रम पहा"},"testimonials":{"tag":"पालकांचे अभिप्राय","title":"आमच्यावर विश्वास ठेवणारे पालक.","t1":{"text":"\"आम्ही डॉ. मार थिओफिलस शाळामुळे खूप समाधानी आहोत. माझी मुलगी, इवाना विनय वट्टप्पिल्ली (इयत्ता २-अ), दररोज आनंदाने शाळेत जाते. येथील शिक्षक काळजी घेणारे, सहकार्य करणारे आणि समर्पित आहेत, त्यांनी असे सकारात्मक शिक्षण वातावरण निर्माण केले आहे ज्यामुळे तिची शैक्षणिक व वैयक्तिक प्रगती झाली आहे. दर्जेदार शिक्षण आणि मूल्ये देण्यासाठी मुख्याध्यापिका, शिक्षक व कर्मचाऱ्यांनी घेतलेल्या मेहनतीबद्दल आम्ही मनापासून आभारी आहोत. डॉ. मार थिओफिलस कुटुंबाचा भाग असल्याचा आम्हाला अभिमान आहे.\"","author":"- श्रीमती ज्युली व्ही. वट्टप्पिल्ली"},"t2":{"text":"\"डॉ. मार थिओफिलस शाळा खोपोलीच्या सर्व शिक्षक, मुख्याध्यापिका आणि व्यवस्थापनाचे मी मनापासून आभार मानते. माझा मुलगा या शाळेत शिकून आता ४ वर्षे झाली असून त्याच्या प्रगतीने आणि इथे झालेल्या जडणघडणीने मी खरोखर खूप समाधानी आहे. शाळेचे वातावरण, शिक्षणाचा दर्जा, अध्यापन कौशल्य आणि सुसज्जता या बाबतीत डॉ. मार थिओफिलस शाळा खोपोलीतील सर्वोत्तम शाळांपैकी एक आहे. सर्व शिक्षक उच्च शिक्षित असून काळजी घेणारे कर्मचारी आहेत. येथे स्मार्ट लर्निंगपासून ते प्रशस्त क्रीडांगण, सुसज्ज प्रयोगशाळा आणि मुलांच्या सुरक्षिततेपर्यंत सर्व सुविधा उपलब्ध आहेत. डॉ. मार थिओफिलस शाळा केवळ एक इमारत नसून भविष्यातील नेतृत्व घडवणारे केंद्र आहे. येथे उत्कृष्टता आणि मूल्ये यांचा सुरेख संगम आहे... या शाळेला मी उत्तम यशाच्या शुभेच्छा देते.\"","author":"- डॉ. रश्मी गांधी, पालक"},"t3":{"text":"\"डॉ. मार थिओफिलस शाळामध्ये एल.के.जी.मध्ये शिकणाऱ्या आमच्या मुलीचे, आरिकाचे आम्ही अभिमानी पालक आहोत. आमच्या मुलीसाठी योग्य शाळा निवडणे हा आमच्यासाठी सर्वात महत्त्वाचा निर्णय होता आणि डॉ. मार थिओफिलस शाळा निवडल्याचा आम्हाला आनंद आहे. आरिका रोज वर्गात शिकलेल्या व अनुभवलेल्या गोष्टी उत्साहाने सांगण्यासाठी हसतमुखाने घरी येते. येथील शिक्षक प्रेमळ, प्रोत्साहन देणारे आणि प्रत्येक मुलाच्या गरजांकडे बारकाईने लक्ष देणारे आहेत. आरिकाच्या संवाद कौशल्यात, आत्मविश्वासात, सर्जनशीलतेत आणि एकूण व्यक्तिमत्त्वात आम्हाला उत्तम सुधारणा दिसून आली आहे. शाळा लहान मुलांसाठी सुरक्षित, काळजीपूर्ण आणि आनंददायी वातावरण उपलब्ध करून देते, ज्यामुळे शिक्षण आनंददायी बनते. मुख्याध्यापिका, शिक्षक आणि संपूर्ण शालेय कर्मचाऱ्यांच्या मेहनतीबद्दल, समर्पणाबद्दल आणि विद्यार्थ्यांवरील प्रेमाबद्दल आम्ही मनापासून आभार मानतो. डॉ. मार थिओफिलस शाळा कुटुंबाचा भाग असल्याचा आम्हाला अभिमान आहे आणि शाळेला पुढील यशासाठी शुभेच्छा देतो.\"","author":"- श्रीमती रीमा अगरवाल, पालक"}},"institutions":{"tag":"आमच्या संस्था","titleLine1":"उज्ज्वल भविष्याची निर्मिती","titleLine2":"उत्कृष्टता आणि प्रगतीसह","text":"आमच्या संस्थांच्या नेटवर्कद्वारे दर्जेदार शिक्षण, मूल्ये आणि शैक्षणिक उत्कृष्टतेच्या माध्यमातून विद्यार्थ्यांना सक्षम करणे — करुणा, ज्ञान आणि सचोटीने भविष्यातील नेतृत्व घडवणे.","btn":"सर्व शाळा पहा"}},"contact":{"hero":{"title":"संपर्क करा","subtitleHtml":"आम्ही सदैव आपल्या प्रश्नांची उत्तरे देण्यासाठी आणि डॉ. मार थिओफिलस शाळाशी <br>आपल्याला जोडण्यासाठी सदैव तत्पर आहोत."},"getInTouch":"आमच्याशी संपर्क साधा","startConversation":"चला संवाद सुरू करूया","mainText":"आपल्याला प्रवेशाची चौकशी, शैक्षणिक प्रश्न किंवा सर्वसाधारण अभिप्राय द्यायचा असेल, आमची टीम आपल्याला मदत करण्यास सज्ज आहे.","cards":{"address":{"title":"शाळेचा पत्ता","textHtml":"डॉ. मार थिओफिलस शाळा,<br>डी.पी. रोड, चिंचवली शेकीन, पुणे-411015"},"phone":{"title":"फोन नंबर"},"email":{"title":"ईमेल पत्ता"},"hours":{"title":"कार्यालयीन वेळ","textHtml":"सोमवार - शनिवार<br>सकाळी 9:00 ते दुपारी 1:00"}},"form":{"title":"संदेश पाठवा","subtitle":"खालील फॉर्म भरा आणि आमची टीम लवकरच आपल्याशी संपर्क साधेल.","namePlaceholder":"आपले नाव","emailPlaceholder":"ईमेल पत्ता","phonePlaceholder":"फोन नंबर","subjectPlaceholder":"विषय","messagePlaceholder":"आपला संदेश लिहा...","submit":"संदेश पाठवा","successMessage":"धन्यवाद! आपला संदेश पाठवला गेला आहे."}},"gallery":{"hero":{"title":"शालेय छायाचित्र दालन","subtitle":"क्रीडा, वार्षिक दिन आणि विशेष कार्यक्रमांचा उत्सव"},"filters":{"all":"सर्व","academics":"शैक्षणिक","sports":"क्रीडा","events":"कार्यक्रम","activities":"उपक्रम","allYears":"सर्व वर्षे"},"captions":{"sportsDay":"क्रीडा दिन","sportsPrizeDistribution":"क्रीडा पारितोषिक वितरण","christmasCelebration":"नाताळ साजरा","childrensDayCelebration":"बालदिन साजरा","independenceDayCelebration":"स्वातंत्र्य दिन साजरा","annualDay":"वार्षिक स्नेहसंमेलन","diwaliCelebration":"दिवाळी साजरा","schoolPicnic":"शालेय सहल","graduationCeremony":"पदवीदान समारंभ","marketActivity":"फळे व भाजीपाला बाजार उपक्रम","ashadhiEkadashi":"आषाढी एकादशी","rakshabandhanCelebration":"रक्षाबंधन साजरा","investitureCeremony":"पदग्रहण समारंभ","doctorsDayCelebration":"डॉक्टर दिन साजरा"}},"events":{"hero":{"title":"शालेय कार्यक्रम दिनदर्शिका","subtitle":"पूर्व-प्राथमिक आणि प्राथमिक विभागांसाठी शैक्षणिक उपक्रम, सण, स्पर्धा, परीक्षा आणि महत्त्वाचे शालेय कार्यक्रम पहा — सत्र 2026–27."},"sidebar":{"selectMonth":"महिना निवडा","selectMonthDesc":"निवडलेल्या महिन्याचे आणि पुढील महिन्याचे कार्यक्रम दाखवले जातात.","selectSection":"विभाग निवडा","selectSectionDesc":"पूर्व-प्राथमिक आणि प्राथमिक कार्यक्रम वेळापत्रकांमध्ये बदल करा.","prePrimary":"पूर्व-प्राथमिक","primary":"प्राथमिक","prePrimarySection":"पूर्व-प्राथमिक विभाग","primarySection":"प्राथमिक विभाग"},"session":"सत्र 2026–27","prePrimary":{"title":"पूर्व-प्राथमिक वेळापत्रक","desc":"नर्सरी, ज्युनियर केजी आणि सिनियर केजी विद्यार्थ्यांसाठी सण, स्पर्धा, वर्गातील उपक्रम, पालक-शिक्षक सभा, वार्षिक कार्यक्रम आणि सत्र परीक्षा — सत्र 2026–27.","examTitle":"परीक्षा वेळापत्रक — पूर्व-प्राथमिक","examSub":"मेरीडेल प्री-प्रायमरी स्कूल, खोपोली","examClass":"इयत्ता: नर्सरी – सि. केजी"},"primary":{"title":"प्राथमिक वेळापत्रक","desc":"इयत्ता पहिली ते सहावीसाठी स्पर्धा, सण, सत्र-1 व सत्र-2 परीक्षा, पालक-शिक्षक सभा आणि वार्षिक शालेय कार्यक्रमांसह शैक्षणिक वेळापत्रक — सत्र 2026–27.","examTitle":"परीक्षा वेळापत्रक — प्राथमिक","examSub":"डॉ. मार थिओफिलस शाळा, खोपोली","examClass":"इयत्ता: 1 – 6"},"exam":{"pe1":"आवर्ती मूल्यमापन – 1","pe2":"आवर्ती मूल्यमापन – 2","pe3":"आवर्ती मूल्यमापन – 3","pe4":"आवर्ती मूल्यमापन – 4","pe5":"अंतिम मूल्यमापन – 5","pa1":"आवर्ती मूल्यांकन – 1","pa2":"आवर्ती मूल्यांकन – 2","pa3":"आवर्ती मूल्यांकन – 3","pa4":"आवर्ती मूल्यांकन – 4","pa5":"आवर्ती मूल्यांकन – 5","term1":"सत्र – 1 परीक्षा","term2":"सत्र – 2 परीक्षा","summerHomeworkNote":"उन्हाळी सुट्टी एकात्मिक गृहपाठ","xmasHomeworkNote":"नाताळ सुट्टी गृहपाठ"},"holidayList":{"title":"संपूर्ण सुट्ट्यांची यादी 2026–27","schools":"डॉ. मार थिओफिलस शाळा आणि मेरीडेल प्री-प्रायमरी स्कूल, खोपोली","note":"शासनाच्या अधिसूचनेनुसार सुट्ट्यांमध्ये बदल होऊ शकतो.","months":{"may2026":"मे २०२६","june2026":"जून २०२६","august2026":"ऑगस्ट २०२६","september2026":"सप्टेंबर २०२६","october2026":"ऑक्टोबर २०२६","november2026":"नोव्हेंबर २०२६","december2026":"डिसेंबर २०२६","january2027":"जानेवारी २०२७","february2027":"फेब्रुवारी २०२७","march2027":"मार्च २०२७","april2027":"एप्रिल २०२७"}},"holidays":{"bakriEid":"बकरी ईद","muharram":"मोहरम","eidEMilad":"ईद-ए-मिलाद","rakshaBandhan":"रक्षाबंधन","janmashtami":"जन्माष्टमी","ganpatiHolidays":"गणपती सुट्टी","anantChaturdashi":"अनंत चतुर्दशी","gandhiJayanti":"गांधी जयंती","dussehra":"दसरा","diwaliBreak":"दिवाळी सुट्टी","guruNanakJayanti":"गुरु नानक जयंती","christmasHolidays":"नाताळ सुट्टी","makarSankranti":"मकर संक्रांती","shivajiMaharajJayanti":"छ. शिवाजी महाराज जयंती","mahaShivaratri":"महाशिवरात्री","ramzanEid":"रमजान ईद","holi":"होळी","maundyThursday":"पवित्र गुरुवार","worldSpiritDay":"वर्ल्ड स्पिरिट डे","gudiPadwa":"गुढी पाडवा","ambedkarJayanti":"आंबेडकर जयंती","ramNavami":"रामनवमी","mahavirJayanti":"महावीर जयंती"},"calendar":{"2026-04":{"name":"एप्रिल २०२६","pp":{"0":{"title":"नवीन सत्राची सुरुवात – स्वागत उपक्रम","desc":"सत्राची सुरुवात व स्वागत उपक्रम."},"1":{"title":"पालक अभिमुखता सभा","desc":"पालकांसाठी वर्गनिहाय अभिमुखता (१३ ते १७ एप्रिल)."},"2":{"title":"कृतीतून शिक्षण – नगरपालिका भेट","desc":"खोपोली नगरपालिकेला शैक्षणिक भेट."},"3":{"title":"भाजी व फळ बाजार उपक्रम","desc":"परस्परसंवादी वर्ग-शिक्षण अनुभव."},"4":{"title":"पालक-शिक्षक सभा","desc":"सर्व पूर्व-प्राथमिक वर्गांसाठी पीटीएम."}},"pr":{"0":{"title":"नवीन सत्राची सुरुवात – स्वागत उपक्रम","desc":"सत्राची सुरुवात व स्वागत उपक्रम."},"1":{"title":"पालक अभिमुखता सभा","desc":"पालकांसाठी वर्गनिहाय अभिमुखता (१३ ते १७ एप्रिल)."},"2":{"title":"कृतीतून शिक्षण – नगरपालिका भेट","desc":"खोपोली नगरपालिकेला शैक्षणिक भेट."},"3":{"title":"भाजी व फळ बाजार उपक्रम","desc":"परस्परसंवादी वर्ग-शिक्षण अनुभव."},"4":{"title":"पालक-शिक्षक सभा","desc":"सर्व प्राथमिक वर्गांसाठी पीटीएम."}}},"2026-05":{"name":"मे २०२६","pp":{"0":{"title":"उन्हाळी सुट्टी सुरू","desc":"शाळेला उन्हाळी सुट्टी (१ मे – ७ जून, २०२६)."}},"pr":{"0":{"title":"उन्हाळी सुट्टी व एकात्मिक गृहपाठ","desc":"आवर्ती मूल्यांकन-१: उन्हाळी सुट्टीचा गृहपाठ (१ मे – ३ जून, २०२६)."}}},"2026-06":{"name":"जून २०२६","pp":{"0":{"title":"शाळा पुन्हा सुरू","desc":"उन्हाळी सुट्टीनंतर शाळा पुन्हा सुरू."},"1":{"title":"शैक्षणिक उपक्रम","desc":"परस्परसंवादी शिक्षण उपक्रम."},"2":{"title":"योग दिन – मानसिक आरोग्य सत्र","desc":"मानसिक आरोग्यावरील समुपदेशन सत्र व योग दिन साजरा."},"3":{"title":"मनोरंजक उपक्रम","desc":"पावसाळी संकल्पनेवर आधारित मनोरंजक शिक्षण उपक्रम."}},"pr":{"0":{"title":"शाळा पुन्हा सुरू","desc":"उन्हाळी सुट्टीनंतर शाळा पुन्हा सुरू."},"1":{"title":"निवडणूक प्रचार – शालेय परिषद","desc":"नेतृत्व निवडणूक प्रचार उपक्रम."},"2":{"title":"योग दिन – मानसिक आरोग्य सत्र","desc":"मानसिक आरोग्यावरील समुपदेशन सत्र व योग दिन साजरा."},"3":{"title":"शालेय परिषद निवडणूक दिन","desc":"विद्यार्थी शालेय परिषद प्रतिनिधींसाठी मतदान करतात."},"4":{"title":"पदग्रहण समारंभ","desc":"सत्र २०२६–२७ साठी शालेय परिषदेची स्थापना."}}},"2026-07":{"name":"जुलै २०२६","pp":{"0":{"title":"डॉक्टर्स डे – भूमिका अभिनय उपक्रम","desc":"मनोरंजक भूमिका अभिनय व जनजागृती उपक्रम."},"1":{"title":"शेअरिंग इज केअरिंग – उपक्रम","desc":"मैत्री आणि मूल्याधारित उपक्रम."},"2":{"title":"आषाढी एकादशी – उत्सव","desc":"सांस्कृतिक व आध्यात्मिक उत्सव."},"3":{"title":"आवर्ती मूल्यांकन – १ सुरू","desc":"२४ जुलै – ३१ जुलै, २०२६ या कालावधीत मूल्यांकन."}},"pr":{"0":{"title":"एकल गायन – सदन उपक्रम","desc":"संगीत व सांस्कृतिक स्पर्धा."},"1":{"title":"जागतिक लोकसंख्या दिन – उपक्रम","desc":"जनजागृती कार्यक्रम."},"2":{"title":"आषाढी एकादशी – उत्सव","desc":"सांस्कृतिक व आध्यात्मिक उत्सव."},"3":{"title":"आवर्ती मूल्यांकन – २ सुरू","desc":"२४ जुलै – ३१ जुलै, २०२६ या कालावधीत मूल्यांकन."}}},"2026-08":{"name":"ऑगस्ट २०२६","pp":{"0":{"title":"इंग्रजी कविता स्पर्धा","desc":"पूर्व-प्राथमिक विद्यार्थ्यांसाठी मंचीय उपक्रम."},"1":{"title":"पालक-शिक्षक सभा","desc":"सर्व पूर्व-प्राथमिक वर्गांसाठी पीटीएम."},"2":{"title":"स्वातंत्र्य दिन सोहळा","desc":"देशभक्तीपर कार्यक्रम."},"3":{"title":"आनंद मेळा","desc":"वार्षिक शालेय जत्रा व मनोरंजक उपक्रम."},"4":{"title":"रक्षाबंधन उत्सव","desc":"सणाशी संबंधित उपक्रम."},"5":{"title":"आपले मदतनीस ओळखा – उपक्रम","desc":"समाजातील मदतनीसांबाबत जनजागृती उपक्रम."}},"pr":{"0":{"title":"सदन उपक्रम – चित्रकला स्पर्धा","desc":"आंतर-सदन चित्रकला व कला स्पर्धा."},"1":{"title":"पालक-शिक्षक सभा","desc":"सर्व प्राथमिक वर्गांसाठी पीटीएम."},"2":{"title":"स्वातंत्र्य दिन सोहळा","desc":"देशभक्तीपर कार्यक्रम."},"3":{"title":"आनंद मेळा","desc":"वार्षिक शालेय जत्रा व मनोरंजक उपक्रम."},"4":{"title":"रक्षाबंधन उत्सव","desc":"सणाशी संबंधित कार्यक्रम."},"5":{"title":"मुलींसाठी आरोग्य व निरामयता सत्र","desc":"मुलींसाठी आरोग्य जनजागृती सत्र."}}},"2026-09":{"name":"सप्टेंबर २०२६","pp":{"0":{"title":"आवर्ती मूल्यांकन – २ सुरू","desc":"२ सप्टेंबर – ११ सप्टेंबर, २०२६ या कालावधीत मूल्यांकन."},"1":{"title":"कृष्ण जन्माष्टमी – उत्सव","desc":"गोपाळकाला व सांस्कृतिक उत्सव."},"2":{"title":"शिक्षक दिन सोहळा","desc":"शिक्षकांच्या सन्मानार्थ शालेय कार्यक्रम."},"3":{"title":"गणपती उत्सव सुट्टी","desc":"शालेय सुट्टी: १४ सप्टेंबर – २१ सप्टेंबर, २०२६."}},"pr":{"0":{"title":"सत्र – १ परीक्षा सुरू","desc":"सत्र-१ परीक्षा: २ सप्टेंबर – ११ सप्टेंबर, २०२६."},"1":{"title":"श्री कृष्ण जन्माष्टमी – उपक्रम","desc":"सांस्कृतिक उपक्रम व उत्सव."},"2":{"title":"शिक्षक दिन सोहळा","desc":"शिक्षकांच्या सन्मानार्थ शालेय कार्यक्रम."},"3":{"title":"गणपती उत्सव सुट्टी","desc":"शालेय सुट्टी: १४ सप्टेंबर – २१ सप्टेंबर, २०२६."},"4":{"title":"सदन उपक्रम – प्रश्नमंजुषा स्पर्धा","desc":"आंतर-सदन शैक्षणिक प्रश्नमंजुषा स्पर्धा."}}},"2026-10":{"name":"ऑक्टोबर २०२६","pp":{"0":{"title":"गांधी जयंती – सर्वधर्म प्रार्थना सभा","desc":"शालेय प्रार्थना सभा व गांधी जयंती उत्सव."},"1":{"title":"उपक्रम","desc":"नियोजित वर्ग उपक्रम."},"2":{"title":"संस्थापक दिन सोहळा","desc":"वार्षिक संस्थापक दिन शालेय कार्यक्रम."},"3":{"title":"पालक-शिक्षक सभा","desc":"सर्व पूर्व-प्राथमिक वर्गांसाठी पीटीएम."},"4":{"title":"नवरात्री उत्सव","desc":"सांस्कृतिक सण उत्सव."},"5":{"title":"पालकत्वावर समुपदेशन सत्र","desc":"पालकांसाठी जनजागृती सत्र."}},"pr":{"0":{"title":"गांधी जयंती – सर्वधर्म प्रार्थना सभा","desc":"शालेय प्रार्थना सभा व गांधी जयंती उत्सव."},"1":{"title":"सदन उपक्रम – निबंध लेखन","desc":"आंतर-सदन निबंध लेखन स्पर्धा."},"2":{"title":"संस्थापक दिन – उपक्रम","desc":"वार्षिक संस्थापक दिन उत्सव."},"3":{"title":"पालक-शिक्षक सभा","desc":"सर्व प्राथमिक वर्गांसाठी पीटीएम."},"4":{"title":"नवरात्री उत्सव","desc":"सांस्कृतिक सण उत्सव."},"5":{"title":"पालकत्वावर समुपदेशन सत्र","desc":"पालकांसाठी जनजागृती सत्र."}}},"2026-11":{"name":"नोव्हेंबर २०२६","pp":{"0":{"title":"दिवाळी उत्सव","desc":"शाळेत दीपोत्सव साजरा."},"1":{"title":"दिवाळी सुट्टी","desc":"शालेय सुट्टी: ४ नोव्हेंबर – १६ नोव्हेंबर, २०२६."}},"pr":{"0":{"title":"दिवाळी उत्सव","desc":"शाळेत दीपोत्सव साजरा."},"1":{"title":"दिवाळी सुट्टी (शालेय सुट्टी)","desc":"शालेय सुट्टी: ४ नोव्हेंबर – १६ नोव्हेंबर, २०२६."}}},"2026-12":{"name":"डिसेंबर २०२६","pp":{"0":{"title":"क्रीडा सप्ताह","desc":"आंतर-सदन व शालेय क्रीडा स्पर्धा (२ ते ५ डिसेंबर)."},"1":{"title":"गोष्ट सांगण्याची स्पर्धा","desc":"सर्जनशील कथाकथन उपक्रम."},"2":{"title":"शालेय वार्षिकोत्सव","desc":"वार्षिक दिन कार्यक्रम — २३ डिसेंबर, २०२६."},"3":{"title":"नाताळ व हिवाळी सुट्टी","desc":"शालेय सुट्टी: २३ डिसेंबर, २०२६ – १ जानेवारी, २०२७."}},"pr":{"0":{"title":"क्रीडा सप्ताह","desc":"सदननिहाय क्रीडा स्पर्धा (२ ते ५ डिसेंबर, २०२६)."},"1":{"title":"सदन उपक्रम – गोष्ट सांगण्याची स्पर्धा","desc":"आंतर-सदन कथाकथन स्पर्धा."},"2":{"title":"सदन उपक्रम – स्मरणशक्ती चाचणी","desc":"आंतर-सदन स्मरणशक्ती चाचणी उपक्रम."},"3":{"title":"शालेय वार्षिकोत्सव","desc":"वार्षिक दिन कार्यक्रम — २३ डिसेंबर, २०२६."},"4":{"title":"नाताळ व हिवाळी सुट्टी","desc":"शालेय सुट्टी: २३ डिसेंबर, २०२६ – १ जानेवारी, २०२७."}}},"2027-01":{"name":"जानेवारी २०२७","pp":{"0":{"title":"शालेय सहल","desc":"वार्षिक शालेय सहल."},"1":{"title":"आवर्ती मूल्यांकन – ४ सुरू","desc":"११ जानेवारी – १८ जानेवारी, २०२७ या कालावधीत मूल्यांकन."},"2":{"title":"मकर संक्रांती – पतंग उडवण्याचा उपक्रम","desc":"पतंग उडवण्याच्या उपक्रमासह सण साजरा."},"3":{"title":"प्रजासत्ताक दिन सोहळा","desc":"देशभक्तीपर कार्यक्रम व ध्वजारोहण समारंभ."},"4":{"title":"हस्ताक्षर स्पर्धा","desc":"शैक्षणिक हस्ताक्षर स्पर्धा."}},"pr":{"0":{"title":"शालेय सहल","desc":"वार्षिक शालेय सहल."},"1":{"title":"आवर्ती मूल्यांकन – ५ सुरू","desc":"११ जानेवारी – १८ जानेवारी, २०२७ या कालावधीत मूल्यांकन."},"2":{"title":"मकर संक्रांती – पतंग उडवण्याचा उपक्रम","desc":"पतंग उडवण्याच्या उपक्रमासह सण साजरा."},"3":{"title":"प्रजासत्ताक दिन सोहळा","desc":"देशभक्तीपर कार्यक्रम व ध्वजारोहण समारंभ."},"4":{"title":"सदन उपक्रम – हिंदी काव्य स्पर्धा","desc":"आंतर-सदन हिंदी काव्य सांस्कृतिक उपक्रम."}}},"2027-02":{"name":"फेब्रुवारी २०२७","pp":{"0":{"title":"उपक्रम – टाकाऊतून टिकाऊ","desc":"टाकाऊ वस्तूंपासून सर्जनशील हस्तकला उपक्रम."},"1":{"title":"पालक-शिक्षक सभा","desc":"सर्व पूर्व-प्राथमिक वर्गांसाठी पीटीएम."}},"pr":{"0":{"title":"मनोरंजक उपक्रम","desc":"विद्यार्थ्यांसाठी शैक्षणिक वर्षअखेरचा मनोरंजक उपक्रम."},"1":{"title":"पालक-शिक्षक सभा","desc":"सर्व प्राथमिक वर्गांसाठी पीटीएम."}}},"2027-03":{"name":"मार्च २०२७","pp":{"0":{"title":"सत्र – २ / अंतिम परीक्षा सुरू","desc":"अंतिम मूल्यांकन (परीक्षा ५): १ मार्च – १२ मार्च, २०२७."},"1":{"title":"निकाल व पदवीदान समारंभ","desc":"निकाल जाहीर व पदवीदान समारंभ."}},"pr":{"0":{"title":"सत्र – २ परीक्षा सुरू","desc":"सत्र-२ परीक्षा: १ मार्च – १२ मार्च, २०२७."},"1":{"title":"निकाल व पदवीदान समारंभ","desc":"निकाल जाहीर व पदवीदान समारंभ."}}}},"showingRange":"दाखवत आहे: {range}","noEvents":"या महिन्यात कोणतेही कार्यक्रम नियोजित नाहीत."},"academics":{"hero":{"title":"शैक्षणिक विभाग","subtitle":"सर्वसमावेशक शिक्षणाद्वारे उत्कृष्टतेचे संवर्धन"},"curriculum":{"tag":"आमचा अभ्यासक्रम","title":"शैक्षणिक विभाग"},"prePrimary":{"badge":"नर्सरी - यूकेजी","title":"पूर्व-प्राथमिक","text":"खेळाधारित शिक्षण, संवेदी विकास आणि मूलभूत कौशल्यांवर आधारित पायाभूत वर्षे.","list1":"खेळाधारित शिक्षण","list2":"स्नायू कौशल्य विकास","list3":"उपक्रम केंद्रे","list4":"सामाजिक कौशल्ये"},"primary":{"badge":"इयत्ता १ - ६","title":"प्राथमिक","text":"वाचन, लेखन आणि गणित यावर भर देत सुदृढ शैक्षणिक पाया घडवणे.","list1":"मुख्य विषय","list2":"जीवन कौशल्ये","list3":"कृतीयुक्त शिक्षण","list4":"सर्जनशील कला"},"holistic":{"tag":"सर्वांगीण विकास","title":"सर्वांगीण व्यक्तिमत्त्व घडवणे","subtitle":"अभ्यास, मूल्ये, सर्जनशीलता आणि व्यक्तिगत विकास यांच्या समतोल मिश्रणातून आत्मविश्वासू, दयाळू आणि सर्वांगीण व्यक्तिमत्त्व घडवणे."},"holisticCards":{"card1":{"title":"व्यक्तिमत्त्व विकास","text":"आत्मविश्वास, संवाद कौशल्य आणि स्वअभिव्यक्ती घडवणे."},"card2":{"title":"नेतृत्व व सांघिक कार्य","text":"जबाबदारी, सांघिक कार्य आणि निर्णय क्षमता यांना प्रोत्साहन."},"card3":{"title":"क्रीडा व आरोग्य","text":"शारीरिक तंदुरुस्ती, शिस्त आणि निरोगी जीवनशैलीला चालना."},"card4":{"title":"नैतिक व मूल्य शिक्षण","text":"नैतिकता, सहानुभूती आणि सुदृढ नैतिक मूल्ये रुजवणे."}},"subjects":{"tag":"उपलब्ध विषय","title":"सर्वसमावेशक अभ्यासक्रम"},"subjectNames":{"mathematics":"गणित","science":"विज्ञान","socialStudies":"सामाजिक शास्त्र","english":"इंग्रजी","arts":"कला व हस्तकला","music":"संगीत","computerScience":"संगणकशास्त्र","physicalEducation":"शारीरिक शिक्षण","marathi":"मराठी","hindi":"हिंदी"},"facilities":{"tag":"सुविधा","title":"अध्ययन पायाभूत सुविधा"},"facilityCards":{"card1":{"title":"स्मार्ट वर्गखोल्या","text":"परस्परसंवादी फळे आणि डिजिटल अध्ययन वातावरण."},"card2":{"title":"संगणक प्रयोगशाळा","text":"कोडिंग आणि प्रात्यक्षिक शिक्षणासाठी आधुनिक प्रणाली."},"card3":{"title":"बालक खेळ क्षेत्र","text":"समृद्ध शैक्षणिक पुस्तके आणि डिजिटल साधने."},"card4":{"title":"क्रीडा","text":"तंदुरुस्ती व विकासासाठी घरातील व मैदानी क्रीडा."},"card5":{"title":"विज्ञान प्रयोगशाळा","text":"प्रत्यक्ष वैज्ञानिक प्रयोगांसाठी आधुनिक उपकरणे."}}},"admissions":{"hero":{"title":"प्रवेश प्रक्रिया","subtitle":"मारियन कुटुंबाचा भाग व्हा"},"open":{"title":"प्रवेश सुरू आहे २०२७-२८ साठी","text":"मर्यादित जागा उपलब्ध. आपल्या मुलाचे भविष्य सुरक्षित करण्यासाठी आजच अर्ज करा!","btn":"आताच अर्ज करा"},"eligibility":{"tag":"पात्रता","title":"वयोमर्यादा निकष","note":"(शैक्षणिक वर्षाच्या मार्गदर्शक तत्त्वांनुसार)"},"table":{"grade":"इयत्ता","ageRequirement":"वयाची अट","dobRange":"जन्मतारीख कालावधी"},"grades":{"nursery":"नर्सरी","lkg":"एलकेजी (लोअर किंडरगार्टन)","ukg":"यूकेजी (अप्पर किंडरगार्टन)","classI":"इयत्ता पहिली","classII":"इयत्ता दुसरी"},"ageValues":{"a3":"३१-१२-२०२६ रोजी ३ वर्षे","a4":"३१-०३-२०२६ रोजी ४ वर्षे","a5":"३१-०३-२०२६ रोजी ५ वर्षे","a6":"३१-०३-२०२६ रोजी ६ वर्षे","classIINote":"मान्यताप्राप्त शाळेतून इयत्ता पहिली यशस्वीरित्या पूर्ण केलेली असावी"},"dobPrefix":"जन्मतारीख","dobTo":"ते","process":{"tag":"प्रवेश प्रक्रिया","title":"अर्ज कसा करावा","subtitle":"आपल्या मुलाची प्रवेश प्रक्रिया पूर्ण करण्यासाठी या सोप्या पायऱ्या अनुसरा"},"steps":{"step1":{"title":"चौकशी व नोंदणी","text":"ऑनलाइन प्रवेश चौकशी फॉर्म भरा किंवा आमच्या कार्यालयाला भेट द्या"},"step2":{"title":"संवाद","text":"मुलासोबत आणि पालकांसोबत अनौपचारिक संवाद"},"step3":{"title":"कागदपत्र पडताळणी","text":"पडताळणीसाठी आवश्यक कागदपत्रे सादर करा"},"step4":{"title":"शुल्क भरणा","text":"प्रवेश शुल्क आणि पहिल्या सत्राचे शुल्क भरा"}},"documents":{"tag":"कागदपत्रे","title":"आवश्यक कागदपत्रे","subtitle":"प्रवेश प्रक्रियेसाठी खालील कागदपत्रे तयार ठेवा:","downloadBtn":"माहितीपत्रक पहा"},"docList":{"birthCert":"जन्म दाखला (मूळ व छायाप्रत)","transferCert":"मागील शाळेचा बदली दाखला (टीसी)","progressReport":"मागील शाळेचा प्रगती अहवाल/रिपोर्ट कार्ड","aadhar":"आधार कार्ड (विद्यार्थी व पालक)","photos":"अलीकडील पासपोर्ट आकाराचे फोटो (4 प्रती)","casteCert":"जात प्रमाणपत्र (लागू असल्यास)","medicalCert":"वैद्यकीय प्रमाणपत्र","addressProof":"पत्ता पुरावा (वीज बिल/रेशन कार्ड)"},"faq":{"title":"वारंवार विचारले जाणारे प्रश्न","q1":{"q":"प्रवेश प्रक्रिया केव्हा सुरू होते?","a":"प्रवेश प्रक्रिया साधारणतः डिसेंबर/जानेवारी महिन्यात पुढील शैक्षणिक वर्षासाठी सुरू होते. अचूक तारखांसाठी कृपया शालेय कार्यालयाशी संपर्क साधा."},"q2":{"q":"प्रवेशासाठी कोणती कागदपत्रे आवश्यक आहेत?","a":"आवश्यक कागदपत्रांमध्ये समाविष्ट आहे: जन्म दाखला, मागील शाळेचा बदली दाखला (टीसी), आधार कार्ड, अलीकडील पासपोर्ट आकाराचे फोटो, मागील वर्षाचे रिपोर्ट कार्ड/गुणपत्रिका आणि जात प्रमाणपत्र (लागू असल्यास)."},"q3":{"q":"प्रवेशासाठी वयाचा निकष काय आहे?","a":"वयाची पात्रता शैक्षणिक वर्षाच्या 31 मार्च रोजी मोजली जाते. नर्सरी/एलकेजीसाठी: 3-4 वर्षे, यूकेजी: 4-5 वर्षे, इयत्ता पहिली: 5-6 वर्षे, आणि इयत्ता दुसरीपासून पुढे सीबीएसई निकषांनुसार."},"q4":{"q":"प्रवेश सर्व विद्यार्थ्यांसाठी खुला आहे का?","a":"होय, पात्रता निकष आणि जागांच्या उपलब्धतेच्या अधीन राहून, जात, पंथ किंवा धर्माचा विचार न करता सर्व मुलांसाठी प्रवेश खुला आहे."}},"cta":{"tag":"आमच्याशी संपर्क साधा","title":"प्रवेशाबाबत मदत हवी आहे?","text":"आमची प्रवेश टीम संपूर्ण प्रक्रियेत आपले मार्गदर्शन करण्यासाठी सज्ज आहे.","contactBtn":"संपर्क करा","callBtn":"आताच कॉल करा"}},"studentsCorner":{"hero":{"title":"विद्यार्थी कोपरा","subtitle":"डॉ. मार थिओफिलस शाळामधील शिक्षण, संसाधने, उपक्रम, सूचना, वेळापत्रके आणि विद्यार्थ्यांना आवश्यक असलेल्या सर्व गोष्टींसाठी आपले डिजिटल स्थान."},"resources":{"tag":"विद्यार्थी कोपरा","title":"विद्यार्थी संसाधने","desc":"विद्यार्थ्यांना आवश्यक असलेले सर्वकाही एकाच ठिकाणी."},"login":{"title":"विद्यार्थी लॉगिन","desc":"शैक्षणिक अद्यतने, गृहपाठ, हजेरी, परीक्षा, सूचना आणि बरेच काही पाहण्यासाठी आपल्या विद्यार्थी पोर्टलमध्ये प्रवेश करा.","assignments":"गृहपाठ","attendance":"हजेरी","exams":"परीक्षा","btn":"विद्यार्थी पोर्टलमध्ये लॉगिन करा"},"calendar":{"title":"शालेय कार्यक्रम दिनदर्शिका","desc":"पूर्व-प्राथमिक आणि प्राथमिक विभागाचे वेळापत्रक, सण, स्पर्धा, परीक्षा आणि शालेय उपक्रम.","upcomingEvents":"आगामी कार्यक्रम","btn":"कार्यक्रम दिनदर्शिका पहा","noEvents":"कार्यक्रम नाहीत","noEventsText":"या तारखेला कोणतेही कार्यक्रम नियोजित नाहीत."},"uniform":{"titleHtml":"शालेय गणवेश<br>व नियम","desc":"आपल्या गणवेश मार्गदर्शक तत्त्वे, शालेय नियम आणि आचारसंहिता जाणून घ्या.","btn":"गणवेश व नियम पहा"},"rules":{"uniform":"गणवेश मार्गदर्शक तत्त्वे","discipline":"शिस्त धोरणे","conduct":"आचारसंहिता","attendance":"हजेरी नियम","grooming":"नीटनेटकेपणाचे निकष","behaviour":"वर्तन मार्गदर्शक तत्त्वे"},"wellbeing":{"tag":"विद्यार्थी सहाय्य","title":"आरोग्य व सुरक्षितता","desc":"सुरक्षित आणि सकारात्मक शिक्षण वातावरणाद्वारे विद्यार्थ्यांना सहाय्य.","wellness":"विद्यार्थी आरोग्य","childSafety":"बाल सुरक्षा","counselling":"समुपदेशन","digitalSafety":"डिजिटल सुरक्षा"}},"leader":{"hero":{"title":"आमचे नेतृत्व","subtitle":"शिक्षणातील उत्कृष्टतेसाठी समर्पित संघाला भेटा"},"president":{"roleTag":"अध्यक्ष, MOCCB","tag":"अध्यक्षांचा संदेश","title":"शिक्षणाचा प्रकाशस्तंभ","p1":"प्रिय पालक, विद्यार्थी आणि हितचिंतक,","p2":"डॉ. मार थिओफिलस शाळा, खोपोली येथे आपले स्वागत करताना मला अत्यंत आनंद होत आहे. शैक्षणिक उत्कृष्टतेचा प्रकाशस्तंभ ठरणारी संस्था उभारणे हेच आमचे नेहमीचे ध्येय राहिले आहे.","p3":"शिक्षण म्हणजे केवळ शैक्षणिक यश नव्हे; ते चारित्र्य घडवणे, मूल्ये रुजवणे आणि मुलांना आत्मविश्वास व करुणेने भविष्यासाठी सज्ज करणे आहे.","p4":"पालक, शिक्षक आणि व्यवस्थापन यांच्या पाठिंब्याने आमचे विद्यार्थी जीवनाच्या सर्व क्षेत्रांत उत्कृष्टता साध्य करत राहतील, असा मला विश्वास आहे.","blessing":"देव आपणा सर्वांना आशीर्वादित करो."},"vp":{"roleTag":"उपाध्यक्ष, MOCCB","tag":"उपाध्यक्षांचा संदेश","title":"आमच्या मुलांना जबाबदार नागरिक बनवण्यासाठी सक्षम करणे","p1":"या वेगाने बदलणाऱ्या जगात, दर्जेदार शिक्षण हेच वाढीचा आणि टिकावाचा पाया आहे. आधुनिक जीवनातील गुंतागुंत आणि आव्हानांतून मार्ग दाखवणारा होकायंत्र म्हणून ते कार्य करते. खरे शिक्षण वर्गाच्या भिंतींपलीकडे जाते आणि केवळ माहिती व ज्ञान मिळवण्यापुरते मर्यादित न राहता शहाणपण, चिकाटी, सचोटी आणि करुणा घडवते. असे शिक्षण आमच्या मुलांना जबाबदार नागरिक, विचारशील नेते आणि समाजाचे दयाळू सेवक बनण्यासाठी सक्षम करते.","p2":"शिक्षणाच्या या उदात्त प्रवासातून, बौद्धिक उत्कृष्टतेबरोबरच सुदृढ नैतिक व आध्यात्मिक मूल्यांचे संवर्धन करण्यासाठी आपण कटिबद्ध राहूया. प्रत्येक विद्यार्थ्याला नम्रतेने सत्याचा शोध घेण्यास, धैर्याने आव्हानांना सामोरे जाण्यास आणि इतरांच्या भल्यासाठी आपल्या ईश्वरदत्त प्रतिभेचा वापर करण्यास ही संस्था प्रेरित करो.","p3":"आमच्या सर्व विद्यार्थ्यांना, शिक्षकांना, पालकांना आणि कुटुंबियांना मी मनःपूर्वक आशीर्वाद व शुभेच्छा देतो. आपला शैक्षणिक प्रवास नवनवीन शोधांच्या आनंदाने, प्रत्येक आव्हानावर मात करण्याच्या चिकाटीने आणि ज्ञान, शहाणपण, श्रद्धा व चारित्र्यात सतत वाढ करण्यासाठी सर्वशक्तिमान देवाच्या कृपेने परिपूर्ण असो."},"committee":{"tag":"नेतृत्व संघ","title":"नेतृत्व","desc":"आमचे समर्पित समिती सदस्य शाळेच्या दृष्टिकोन आणि धोरणात्मक दिशेचे मार्गदर्शन करतात."},"roles":{"president":"अध्यक्ष","vicePresident":"उपाध्यक्ष","secretary":"सचिव","ceo":"मुख्य कार्यकारी अधिकारी","dyCeo":"उप मुख्य कार्यकारी अधिकारी","committeeChairman":"शालेय समिती अध्यक्ष"},"heritage":{"tag":"आमच्या संस्था","title":"वारसा व शैक्षणिक उत्कृष्टता","desc":"आमच्या संस्थांच्या नेटवर्कद्वारे दर्जेदार शिक्षण, मूल्ये आणि शैक्षणिक उत्कृष्टतेच्या माध्यमातून विद्यार्थ्यांना सक्षम करणे.","visitWebsite":"वेबसाइटला भेट द्या"},"boardTags":{"state":"राज्य मंडळ","jrCollege":"कनिष्ठ महाविद्यालय","management":"व्यवस्थापन"},"principal":{"roleTag":"मुख्याध्यापक","tag":"मुख्याध्यापकांचा संदेश","title":"मुख्याध्यापकांच्या डेस्कवरून","p1":"प्रिय पालक आणि विद्यार्थी,","p2":"डॉ. मार थिओफिलस शाळामध्ये आपले स्वागत करणे हा माझा बहुमान आहे. प्रत्येक मूल अद्वितीय आहे आणि त्याला सर्वोत्तम शिक्षण मिळण्यास पात्र आहे, असा आमचा विश्वास आहे. आमचे समर्पित शिक्षक व कर्मचारी शैक्षणिक उत्कृष्टता, व्यक्तिगत विकास आणि चारित्र्य घडणीला चालना देणारे वातावरण निर्माण करण्यासाठी अथक परिश्रम घेतात.","p3":"शिक्षण ही शाळा आणि घर यांच्यातील भागीदारी आहे, हे आम्ही जाणतो. एकत्रितपणे, आपण आपल्या विद्यार्थ्यांना त्यांची पूर्ण क्षमता गाठण्यास आणि पुढील आव्हाने व संधींसाठी सज्ज करण्यास मदत करू शकतो.","p4":"आमचे कार्यक्रम जाणून घेण्यासाठी आणि आम्ही देत असलेल्या अनेक संधी शोधण्यासाठी मी आपणास आमंत्रित करतो. आमच्या शालेय कुटुंबात आपले स्वागत करण्यास आम्ही उत्सुक आहोत."}},"aboutUs":{"hero":{"title":"आमच्याविषयी","subtitle":"शांत, प्रगतीशील आणि खुल्या मनाचा जागतिक समुदाय घडवणे"},"quote":{"text":"\"शिकणे हे ऐकण्याचे फळ आहे, जे आणखी चांगले ऐकणे आणि समोरच्या व्यक्तीकडे लक्ष देण्यास कारणीभूत ठरते. दुसऱ्या शब्दांत, मुलाकडून शिकण्यासाठी आपल्यात सहानुभूती असणे आवश्यक आहे, आणि शिकत असताना ही सहानुभूती अधिकाधिक वाढत जाते.\"","author":"— अ‍ॅलिस मिलर, पोलिश-स्विस मानसशास्त्रज्ञ, मनोविश्लेषक आणि तत्त्वज्ञ"},"philosophy":{"tag":"आमचे तत्त्वज्ञान","title":"मूल्याधारित शिक्षण","textHtml":"डॉ. मार थिओफिलस शाळा, खोपोली येथे आम्ही विविध उपक्रमांद्वारे आमच्या मुलांना ही गुणवैशिष्ट्ये व मूल्ये शिकवण्याचा प्रयत्न करतो. ही मूल्ये शिकून व अंगीकारून आपण आपल्या समाजात आमूलाग्र बदल घडवू शकतो, असा आमचा विश्वास आहे.<br><br>डॉ. मार थिओफिलस शाळा केवळ शैक्षणिक कौशल्यांवरच नव्हे, तर नैतिक मूल्ये, शिस्त आणि सहशालेय उपक्रमांवरही भर देणारे शिक्षण देण्यासाठी समर्पित आहे. ही संस्था पूर्व-प्राथमिक ते प्राथमिक स्तरापर्यंतच्या विद्यार्थ्यांना अशा अभ्यासक्रमाद्वारे शिकवते, जो त्यांना उच्च शिक्षण आणि शाळेनंतरच्या जीवनातील आव्हानांसाठी सज्ज करतो."},"history":{"tag":"इतिहास","title":"साकार झालेले स्वप्न","subtitle":"डॉ. मार थिओफिलस शाळाची कहाणी म्हणजे खोपोलीतील शैक्षणिक उत्कृष्टतेसाठीचे स्वप्न, समर्पण आणि निष्ठा यांची कहाणी आहे.","visionaryTitle":"स्वप्नद्रष्टा","visionaryText":"एच.जी. गीवरगीस मार कुरिलोस, MOCCB चे अध्यक्ष.","establishmentTitle":"स्थापना वर्ष","proposedTitle":"प्रस्तावित","proposedText":"सीबीएसई मंडळ - सेंट्रल बोर्ड ऑफ सेकंडरी एज्युकेशन"},"dates":{"estDate":"१२ जून २०१९"},"journey":{"title":"आमचा प्रवास","p1Html":"डॉ. मार थिओफिलस शाळा, खोपोली ही द मलंकारा ऑर्थोडॉक्स चर्च कौन्सिल ऑफ बॉम्बे (MOCCB) चे अध्यक्ष एच.जी. गीवरगीस मार कुरिलोस यांची संकल्पना आहे. अभ्यासक्रमांमध्ये विविधता आणण्याच्या दिशेने पहिले पाऊल म्हणून, तसेच खोपोली परिसराला बालवाडी ते उच्च शिक्षण (KG to PG) असे संपूर्ण शिक्षण उपलब्ध करून देण्यासाठी आणि संपूर्ण प्रदेशाच्या वाढीसाठी व उन्नतीसाठी उपयुक्त ठरणारा शैक्षणिक उत्कृष्टतेचा प्रकाशस्तंभ बनण्यासाठी याची कल्पना करण्यात आली.","p2Html":"ही जमीन २०१८ साली परत विकत घेण्यात आली - त्यावेळी खोपोलीच्या औद्योगिक परिसरात प्रामुख्याने महाराष्ट्र राज्य मंडळाचा (एसएससी) अभ्यासक्रम अनुसरणाऱ्या शैक्षणिक संस्था होत्या. आणि १२ जून, २०१९ रोजीची तिची नम्र सुरुवात या अद्भुत स्वप्नाचे वास्तवात रूपांतर झाल्याचे निदर्शक आहे.","p3":"डॉ. मार थिओफिलस खोपोली आपल्या व्यवस्थापनाच्या सक्षम मार्गदर्शनाखाली, पालकांच्या अखंड पाठिंब्याने आणि कुशल शिक्षक व शिक्षकेतर कर्मचाऱ्यांच्या साहाय्याने प्रगती करत आहे. एक संस्था म्हणून, आमच्या स्वप्नद्रष्ट्या नेत्याने आमच्यावर सोपवलेले हे स्वप्न पूर्ण करण्यासाठी आम्ही दररोज अधिक मेहनत घेतो, स्वतःची अधिक चांगली आवृत्ती बनण्याचा प्रयत्न करतो; आणि त्याचबरोबर आमच्या विद्यार्थ्यांनाही आपली स्वप्ने पूर्ण करण्यास व दररोज स्वतःमध्ये सुधारणा करण्यास प्रोत्साहित करतो."},"motto":{"tag":"आमचे ब्रीदवाक्य","line1":"ज्ञान आणि कृपेने,","line2":"आम्ही उन्नत होतो"},"vm":{"tag":"आमचा उद्देश","title":"दृष्टिकोन व ध्येय","subtitle":"सुदृढ मूल्ये आणि उत्कृष्टतेची तळमळ यांच्या मार्गदर्शनाखाली, आम्ही ज्ञान, करुणा, नेतृत्व आणि सचोटी असलेले आत्मविश्वासू विद्यार्थी घडवतो.","visionTitleHtml":"आमचा <span>दृष्टिकोन</span>","visionText":"शिक्षणातील उत्कृष्टतेचा प्रकाशस्तंभ बनणे — जिथे तरुण मने ज्ञानाने उजळण्यासाठी पोषित केली जातात, मूल्यांवर आधारित सर्वांगीण शिक्षणाद्वारे घडवली जातात, श्रद्धेने मार्गदर्शित केली जातात आणि ध्येयाने प्रेरित होऊन नेतृत्व करण्यास, सेवा करण्यास आणि एक चांगले जग घडवण्यास सज्ज होतात.","missionTitleHtml":"आमचे <span>ध्येय</span>","mission1":"सर्वसमावेशक, चैतन्यशील व सुरक्षित शिक्षण वातावरण निर्माण करणे — जिथे प्रत्येकाला महत्त्व दिले जाते, प्रत्येकाचा आवाज ऐकला जातो आणि प्रत्येकाच्या क्षमतेचे पोषण केले जाते.","mission2":"विद्यार्थ्यांमध्ये करुणा, शिस्त आणि उत्कृष्टता रुजवून, त्यांना शैक्षणिक, नैतिक, भावनिक, सामाजिक आणि आध्यात्मिकदृष्ट्या वाढण्यास सक्षम करणे.","mission3":"जिज्ञासा, चिकित्सक विचारसरणी, सर्जनशीलता, नवोपक्रम आणि नेतृत्व यांना चालना देऊन, त्यांना आजीवन शिकणारे, विविधतेचा आदर करणारे आणि समाजाच्या भल्यासाठी कटिबद्ध घडवणे.","mission4":"पालक आणि समुदायासोबत भागीदारी करून, त्यांच्या व्यक्तिमत्त्वाचा आणि चारित्र्याचा सर्वांगीण विकास सुनिश्चित करणे."},"approach":{"tag":"आमचा दृष्टिकोन","title":"कृतीयुक्त शिक्षण","subtitle":"कार्यशाळा, उपक्रम आणि प्रात्यक्षिक अनुभवांद्वारे अनुभवाधारित शिक्षणावर आम्ही भर देतो, जे सर्जनशीलता आणि चिकित्सक विचारसरणी बळकट करते.","card1":"प्रात्यक्षिक शिक्षण","card2":"मूल्य शिक्षण","card3":"सहयोगात्मक","card4":"नाविन्यपूर्ण"},"principal":{"roleTag":"मुख्याध्यापक","tag":"मुख्याध्यापकांचा संदेश","title":"मुख्याध्यापकांच्या डेस्कवरून","p1":"प्रिय पालक आणि विद्यार्थी,","p2":"डॉ. मार थिओफिलस शाळामध्ये आपले स्वागत करणे हा माझा बहुमान आहे. प्रत्येक मूल अद्वितीय आहे आणि त्याला सर्वोत्तम शिक्षण मिळण्यास पात्र आहे, असा आमचा विश्वास आहे. आमचे समर्पित शिक्षक व कर्मचारी शैक्षणिक उत्कृष्टता, व्यक्तिगत विकास आणि चारित्र्य घडणीला चालना देणारे वातावरण निर्माण करण्यासाठी अथक परिश्रम घेतात.","p3":"शिक्षण ही शाळा आणि घर यांच्यातील भागीदारी आहे, हे आम्ही जाणतो. एकत्रितपणे, आपण आपल्या विद्यार्थ्यांना त्यांची पूर्ण क्षमता गाठण्यास आणि पुढील आव्हाने व संधींसाठी सज्ज करण्यास मदत करू शकतो.","p4":"आमचे कार्यक्रम जाणून घेण्यासाठी आणि आम्ही देत असलेल्या अनेक संधी शोधण्यासाठी मी आपणास आमंत्रित करतो. आमच्या शालेय कुटुंबात आपले स्वागत करण्यास आम्ही उत्सुक आहोत."}},"brand":{"line1":"डॉ. मार थिओफिलस","line2":"पब्लिक स्कूल"}}};

const I18N = (() => {

  const STORAGE_KEY = "siteLanguage";

  const DEFAULT_LANG = "en";

  const SUPPORTED_LANGS = ["en", "mr"];



  const LANG_META = {

    en: { label: "English", nativeLabel: "English", dir: "ltr" },

    mr: { label: "Marathi", nativeLabel: "मराठी", dir: "ltr" }

  };



  const DEVANAGARI_DIGITS = "०१२३४५६७८९";

  const LATIN_DIGITS = "0123456789";



  let cache = {};

  let currentLang = DEFAULT_LANG;

  let loadPromises = {};

  let digitObserver;



  function getNested(obj, path) {

    return path

      .split(".")

      .reduce((acc, key) =>

        acc && acc[key] !== undefined ? acc[key] : undefined, obj);

  }



  async function loadLanguage(lang) {

    if (cache[lang]) return cache[lang];

    if (loadPromises[lang]) return loadPromises[lang];



    loadPromises[lang] = Promise.resolve(INLINE_TRANSLATIONS[lang] || {})

      .then(data => {

        cache[lang] = data;

        return data;

      });



    return loadPromises[lang];

  }



  function toDevanagariDigits(value) {

    return String(value).replace(/[0-9]/g, digit => DEVANAGARI_DIGITS[digit]);

  }



  function toLatinDigits(value) {

    return String(value).replace(/[०-९]/g, digit =>

      LATIN_DIGITS[DEVANAGARI_DIGITS.indexOf(digit)]);

  }



  // Converts in both directions, so switching back to English restores 0–9.

  function localizeDigits(value) {
    return toLatinDigits(value);

  }



  function applyToElement(el, dict) {
    if (el.closest('header, footer, nav, .site-footer, #noticeMarqueeBar, a[href^="mailto:"]')) return;

    const textKey = el.getAttribute("data-i18n");

    if (textKey) {

      const value = getNested(dict, textKey);

      if (value !== undefined) el.textContent = localizeDigits(value);

    }



    const htmlKey = el.getAttribute("data-i18n-html");

    if (htmlKey) {

      const value = getNested(dict, htmlKey);

      if (value !== undefined) el.innerHTML = localizeDigits(value);

    }



    const placeholderKey = el.getAttribute("data-i18n-placeholder");

    if (placeholderKey) {

      const value = getNested(dict, placeholderKey);

      if (value !== undefined) {

        el.setAttribute("placeholder", localizeDigits(value));

      }

    }



    const titleKey = el.getAttribute("data-i18n-title");

    if (titleKey) {

      const value = getNested(dict, titleKey);

      if (value !== undefined) el.setAttribute("title", localizeDigits(value));

    }



    const ariaKey = el.getAttribute("data-i18n-aria-label");

    if (ariaKey) {

      const value = getNested(dict, ariaKey);

      if (value !== undefined) {

        el.setAttribute("aria-label", localizeDigits(value));

      }

    }

  }



  function canConvertTextNode(node) {

    const parent = node.parentElement;



    if (!parent || !node.nodeValue.trim()) return false;



    // Never alter JavaScript, CSS, templates, code samples, or form values.

    if (parent.closest("script, style, template, noscript, code, pre")) {

      return false;

    }



    return /[0-9०-९]/.test(node.nodeValue);

  }



  // Converts every visible number on every page.

  function applyDigitConversion(root) {
    // Numbers are deliberately preserved in every language.
    return;

    const scope = root || document;



    const walker = document.createTreeWalker(

      scope,

      NodeFilter.SHOW_TEXT,

      {

        acceptNode(node) {

          return canConvertTextNode(node)

            ? NodeFilter.FILTER_ACCEPT

            : NodeFilter.FILTER_REJECT;

        }

      }

    );



    const nodes = [];

    let node;



    while ((node = walker.nextNode())) {

      nodes.push(node);

    }



    nodes.forEach(textNode => {

      const localized = localizeDigits(textNode.nodeValue);

      if (localized !== textNode.nodeValue) {

        textNode.nodeValue = localized;

      }

    });

  }



  function applyToRoot(root) {

    root = root || document;

    const dict = cache[currentLang] || {};



    const selector = [

      "[data-i18n]",

      "[data-i18n-html]",

      "[data-i18n-placeholder]",

      "[data-i18n-title]",

      "[data-i18n-aria-label]"

    ].join(",");



    if (root.nodeType === Node.ELEMENT_NODE && root.matches(selector)) {

      applyToElement(root, dict);

    }



    root.querySelectorAll(selector).forEach(el => applyToElement(el, dict));
    translateUnmarkedContent(root);

    applyDigitConversion(root);



    const docTitleKey =

      document.body && document.body.getAttribute("data-i18n-doc-title");



    if (docTitleKey) {

      const value = getNested(dict, docTitleKey);

      if (value) document.title = localizeDigits(value);

    }

  }



  // Translate text nodes without replacing links, controls or their event listeners.
  const originalText = new WeakMap();
  const phraseMap = new Map();
  const normalizePhrase = value => value.replace(/\s+/g, ' ').trim();
  function collectPhrases(en, mr) {
    if (typeof en === 'string' && typeof mr === 'string') {
      const a = document.createElement('template'), b = document.createElement('template');
      a.innerHTML = en; b.innerHTML = mr;
      const source = normalizePhrase(a.content.textContent);
      const translated = normalizePhrase(b.content.textContent);
      const sourceNumbers = source.match(/[0-9]+/g) || [];
      let index = 0;
      const safe = translated.replace(/[0-9०-९]+/g, value => sourceNumbers[index++] || toLatinDigits(value));
      if (source && !source.includes('@')) phraseMap.set(source, safe);
    } else if (en && mr && typeof en === 'object') {
      Object.keys(en).forEach(key => { if (mr[key] !== undefined) collectPhrases(en[key], mr[key]); });
    }
  }
  collectPhrases(INLINE_TRANSLATIONS.en, INLINE_TRANSLATIONS.mr);
  // Add exact English -> Marathi pairs here when page copy is updated.
  Object.entries({
    'Little Steps, Big Discoveries, Bright Beginnings!':'छोटी पावले, मोठे शोध, उज्ज्वल सुरुवात!',
    'Where Learning Begins with Joy':'जिथे शिक्षणाची सुरुवात आनंदाने होते',
    'Pre-Primary Section':'पूर्व-प्राथमिक विभाग',
    'Admission Procedure':'प्रवेश प्रक्रिया',
    'Contact Us':'आमच्याशी संपर्क साधा',
    'Classes':'वर्ग',
    'Nursery, LKG & UKG':'नर्सरी, एलकेजी आणि यूकेजी',
    'School Hours':'शाळेची वेळ',
    'Reporting Time':'शाळेत उपस्थित राहण्याची वेळ',
    'Every Little Step Matters!':'प्रत्येक छोटे पाऊल महत्त्वाचे आहे!',
    'At Dr. Mar Theophilus School, we celebrate every achievement, every new discovery and every moment of growth.':'डॉ. मार थिओफिलस शाळेत आम्ही प्रत्येक यश, प्रत्येक नवा शोध आणि विकासाचा प्रत्येक क्षण साजरा करतो.',
    "From the first classroom interaction to the joy of completing an activity independently, every experience contributes to a child's journey of learning and development.":'वर्गातील पहिल्या संवादापासून स्वतंत्रपणे उपक्रम पूर्ण करण्याच्या आनंदापर्यंत प्रत्येक अनुभव मुलाच्या शिक्षण आणि विकासाच्या प्रवासाला हातभार लावतो.',
    'We nurture little minds today to inspire bright possibilities tomorrow.':'उद्याच्या उज्ज्वल संधींसाठी आम्ही आज बालमनांची जडणघडण करतो.',
    'See the Admission Procedure':'प्रवेश प्रक्रिया पाहा',
    'Photo Gallery':'छायाचित्र दालन',
    'Photo':'छायाचित्र',
    'Gallery':'दालन',
    'School Life':'शालेय जीवन',
    'School campus':'शाळेचा परिसर',
    'Campus life':'परिसरातील जीवन',
    'Learning together':'एकत्र शिकताना',
    'School activities':'शालेय उपक्रम',
    'Student life':'विद्यार्थी जीवन',
    'School celebrations':'शाळेतील समारंभ',
    'Events':'कार्यक्रम',
    'Shared moments':'एकत्र अनुभवलेले क्षण',
    'Community':'समुदाय',
    'Growing together':'एकत्र प्रगती करताना',
    'Activities':'उपक्रम',
    'Code of':'आचार',
    'Conduct':'संहिता',
    'Discipline':'शिस्त',
    'Policy':'धोरण',
    'School Policies & Info':'शाळेची धोरणे आणि माहिती',
    'School Policies & General Information':'शाळेची धोरणे आणि सर्वसाधारण माहिती',
    'Expand all sections':'सर्व विभाग उघडा',
    'Collapse all':'सर्व विभाग बंद करा',
    'School Uniform Code':'शालेय गणवेशाचे नियम',
    'Show uniform rules':'गणवेशाचे नियम पाहा',
    'Show discipline rules':'शिस्तीचे नियम पाहा',
    'School Discipline':'शालेय शिस्त'
  }).forEach(([en, mr]) => phraseMap.set(en, mr));
  function translateUnmarkedContent(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const parent = node.parentElement;
      if (!parent || parent.closest('header, footer, nav, .site-footer, #noticeMarqueeBar, script, style, textarea, input, code, pre, [data-i18n], [data-i18n-html], a[href^="mailto:"]')) return;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      if (source.includes('@')) return;
      const translated = phraseMap.get(normalizePhrase(source));
      node.nodeValue = currentLang === 'mr' && translated ? source.replace(/\S[\s\S]*\S|\S/, translated) : source;
    });
  }

  // Handles numbers added later by calendars, counters, and AJAX-loaded content.

  function watchDynamicContent() {
    // Do not rewrite numbers in dynamically rendered content.
    return;

    if (digitObserver || !document.body) return;



    digitObserver = new MutationObserver(mutations => {

      if (currentLang !== "mr") return;



      mutations.forEach(mutation => {

        if (mutation.type === "characterData") {

          if (canConvertTextNode(mutation.target)) {

            const localized = localizeDigits(mutation.target.nodeValue);

            if (localized !== mutation.target.nodeValue) {

              mutation.target.nodeValue = localized;

            }

          }

          return;

        }



        mutation.addedNodes.forEach(node => {

          if (node.nodeType === Node.TEXT_NODE) {

            if (canConvertTextNode(node)) {

              node.nodeValue = localizeDigits(node.nodeValue);

            }

          } else if (node.nodeType === Node.ELEMENT_NODE) {

            applyDigitConversion(node);

          }

        });

      });

    });



    digitObserver.observe(document.body, {

      childList: true,

      subtree: true,

      characterData: true

    });

  }



  function updateSwitcherUI() {

    document.querySelectorAll("[data-lang-option]").forEach(opt => {

      const isActive = opt.getAttribute("data-lang-option") === currentLang;

      opt.classList.toggle("active", isActive);

      opt.setAttribute("aria-selected", isActive ? "true" : "false");

    });



    document.querySelectorAll("[data-current-lang-label]").forEach(label => {

      label.textContent =

        (LANG_META[currentLang] && LANG_META[currentLang].nativeLabel) ||

        currentLang;

    });

  }



  function closeDropdown(dropdown) {

    dropdown.classList.remove("open");

    const wrapper = dropdown.closest(".lang-switcher");

    const toggle = wrapper && wrapper.querySelector("[data-lang-toggle]");

    if (toggle) toggle.setAttribute("aria-expanded", "false");

  }



  function closeAllDropdowns(except) {

    document.querySelectorAll(".lang-dropdown.open").forEach(dd => {

      if (dd !== except) closeDropdown(dd);

    });

  }



  function bindSwitcher(root) {

    root = root || document;



    root.querySelectorAll("[data-lang-toggle]").forEach(btn => {

      if (btn.dataset.i18nBound) return;

      btn.dataset.i18nBound = "true";



      btn.addEventListener("click", e => {

        e.preventDefault();

        e.stopPropagation();



        const wrapper = btn.closest(".lang-switcher");

        const dropdown = wrapper && wrapper.querySelector(".lang-dropdown");

        if (!dropdown) return;



        const willOpen = !dropdown.classList.contains("open");

        closeAllDropdowns(willOpen ? dropdown : null);

        dropdown.classList.toggle("open", willOpen);

        btn.setAttribute("aria-expanded", willOpen ? "true" : "false");

      });

    });



    root.querySelectorAll("[data-lang-option]").forEach(opt => {

      if (opt.dataset.i18nBound) return;

      opt.dataset.i18nBound = "true";



      opt.addEventListener("click", e => {

        e.preventDefault();

        setLanguage(opt.getAttribute("data-lang-option"));

        closeAllDropdowns();

      });

    });

  }



  async function setLanguage(lang, root) {

    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;



    await loadLanguage(lang);



    currentLang = lang;

    localStorage.setItem(STORAGE_KEY, lang);



    document.documentElement.setAttribute("lang", lang);

    document.documentElement.setAttribute(

      "dir",

      (LANG_META[lang] && LANG_META[lang].dir) || "ltr"

    );



    applyToRoot(root);

    updateSwitcherUI();



    document.dispatchEvent(new CustomEvent("i18n:changed", {

      detail: { lang }

    }));

  }



  function getLanguage() {

    return currentLang;

  }



  function t(key) {

    const value = getNested(cache[currentLang] || {}, key);

    return value !== undefined ? localizeDigits(value) : key;

  }



  function refresh(root) {

    applyToRoot(root);

    bindSwitcher(root);

    updateSwitcherUI();

  }



  async function init(root) {

    const saved = localStorage.getItem(STORAGE_KEY);

    const lang = SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;



    await Promise.all(SUPPORTED_LANGS.map(loadLanguage));



    currentLang = lang;

    document.documentElement.setAttribute("lang", lang);

    document.documentElement.setAttribute(

      "dir",

      (LANG_META[lang] && LANG_META[lang].dir) || "ltr"

    );



    applyToRoot(root);

    bindSwitcher(root);

    updateSwitcherUI();

    watchDynamicContent();



    document.dispatchEvent(new CustomEvent("i18n:ready", {

      detail: { lang }

    }));

  }



  return {

    init,

    setLanguage,

    getLanguage,

    t,

    refresh,

    applyToRoot,

    bindSwitcher,

    SUPPORTED_LANGS,

    LANG_META

  };

})();



document.addEventListener("click", e => {

  document.querySelectorAll(".lang-switcher").forEach(wrapper => {

    if (!wrapper.contains(e.target)) {

      const dropdown = wrapper.querySelector(".lang-dropdown.open");

      if (dropdown) {
        dropdown.classList.remove("open");
        const toggle = wrapper.querySelector("[data-lang-toggle]");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }

    }

  });

});

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  document.querySelectorAll(".lang-dropdown.open").forEach(dropdown => {
    dropdown.classList.remove("open");
    const wrapper = dropdown.closest(".lang-switcher");
    const toggle = wrapper && wrapper.querySelector("[data-lang-toggle]");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
});



document.addEventListener("DOMContentLoaded", () => I18N.init());

window.I18N = I18N;



/* <script> (original line 22033) */


(function(){

  /* ── translation map: CSS selector → { en, mr } ── */

  var T = [

    /* ── shared back button ── */

    {s:'.pp-back-btn',                        en:'← Back to Home',              mr:'← मुख्यपृष्ठावर परत'},



    /* ══ PRE-PRIMARY ══ */

    {s:'#spg-preprimary .pri-eyebrow,#spg-preprimary .pp-eyebrow', en:'Early Years Programme', mr:'पूर्व-प्राथमिक अभ्यासक्रम'},

    {s:'#spg-preprimary h1',                  en:null,                           mr:null, mrHTML:'पूर्व-<span>प्राथमिक</span><br>शिक्षण'},

    {s:'#spg-preprimary .pp-hero-sub',        en:null,                           mr:null, mrHTML:'नर्सरी, LKG आणि UKG — प्रत्येक मुलाचा प्रवास जिज्ञासा, उबदार वातावरण आणि आनंददायी शोधापासून सुरू होतो.'},

    {s:'#spg-preprimary .pp-stat-lbl',        en:null, mr:null, multi:[

      {en:'Classes (Nursery · LKG · UKG)', mr:'वर्ग (नर्सरी · LKG · UKG)'},

      {en:'Activity zones',                mr:'उपक्रम केंद्रे'},

      {en:'Teacher-student ratio',         mr:'शिक्षक-विद्यार्थी प्रमाण'},

      {en:'Safe, caring classrooms',       mr:'सुरक्षित, काळजीपूर्ण वर्गखोल्या'}

    ]},

    {s:'#spg-preprimary .pp-badge',           en:null, mr:null, multi:[

      {en:'Ages 3 – 6',          mr:'वय 3 – 6'},

      {en:'Play-based Learning', mr:'खेळावर आधारित शिक्षण'},

      {en:'Nurturing Environment',mr:'पोषक वातावरण'}

    ]},

    /* section tags */

    {s:'#spg-preprimary .pp-section-tag', en:null, mr:null, multi:[

      {en:'Our Classes',       mr:'आमचे वर्ग'},

      {en:'Curriculum',        mr:'अभ्यासक्रम'},

      {en:'Development',       mr:'विकास'},

      {en:'Admissions',        mr:'प्रवेश प्रक्रिया'},

      {en:'Apply Now',         mr:'आताच अर्ज करा'}

    ]},

    /* section headings */

    {s:'#spg-preprimary .pp-section h2', en:null, mr:null, multi:[

      {en:'Three Stages, One Journey',   mr:'तीन टप्पे, एक प्रवास'},

      {en:'Play-Based Learning Highlights', mr:'खेळावर आधारित शिक्षणाचे ठळक मुद्दे'},

      {en:'Skills We Nurture',           mr:'आम्ही जोपासतो असे कौशल्ये'},

      {en:'How to Apply',                mr:'अर्ज कसा करावा'},

      {en:'Apply for Admission',         mr:'प्रवेशासाठी अर्ज करा'}

    ]},

    {s:'#spg-preprimary .pp-section-sub', en:null, mr:null, multi:[

      {en:'Each class is thoughtfully designed to meet children exactly where they are developmentally.', mr:'प्रत्येक वर्ग मुलांच्या विकासाच्या टप्प्यानुसार विचारपूर्वक तयार केला आहे.'},

      {en:'Our curriculum balances structured learning with free exploration, ensuring holistic development.', mr:'आमचा अभ्यासक्रम संरचित शिक्षण आणि मुक्त शोध यांचा समतोल साधतो, सर्वांगीण विकास सुनिश्चित करतो.'},

      {en:'Every activity is purposefully designed to develop the whole child.', mr:'प्रत्येक उपक्रम मुलाच्या सर्वांगीण विकासासाठी उद्देशपूर्वक तयार केला आहे.'},

      {en:'Four simple steps to secure your child\'s place at Dr. Mar Theophilus School.', mr:'डॉ. मार थिओफिलस शाळेत आपल्या मुलाचे स्थान सुनिश्चित करण्यासाठी चार सोपे टप्पे.'},

      {en:'Complete the form below to begin your child\'s journey with us.', mr:'आपल्या मुलाचा आमच्यासोबतचा प्रवास सुरू करण्यासाठी खालील फॉर्म भरा.'}

    ]},

    {s:'#spg-preprimary .pp-class-card h3', en:null, mr:null, multi:[

      {en:'Nursery', mr:'नर्सरी'},

      {en:'LKG',     mr:'LKG'},

      {en:'UKG',     mr:'UKG'}

    ]},

    {s:'#spg-preprimary .pp-class-age', en:null, mr:null, multi:[

      {en:'Age 3 – 4 years', mr:'वय 3 – 4 वर्षे'},

      {en:'Age 4 – 5 years', mr:'वय 4 – 5 वर्षे'},

      {en:'Age 5 – 6 years', mr:'वय 5 – 6 वर्षे'}

    ]},

    {s:'#spg-preprimary .pp-step h4', en:null, mr:null, multi:[

      {en:'Application Submission',              mr:'अर्ज सादर करणे'},

      {en:'Interactive Session',                 mr:'संवाद सत्र'},

      {en:'Document Verification & Fee Payment', mr:'कागदपत्र पडताळणी व शुल्क भरणा'},

      {en:'Final Admission Confirmation',        mr:'अंतिम प्रवेश पुष्टी'}

    ]},

    {s:'#spg-preprimary .pp-submit-btn', en:'Submit Application', mr:'अर्ज सादर करा', keepIcon:true},

    {s:'#spg-preprimary .pp-success h3', en:'Application Submitted!', mr:'अर्ज सादर झाला!'},



    /* ══ PRIMARY ══ */

    {s:'#spg-primary .pri-eyebrow',       en:'Primary School',      mr:'प्राथमिक शाळा'},

    {s:'#spg-primary h1',                 en:null, mr:null, mrHTML:'<span>प्राथमिक</span><br>शिक्षण'},

    {s:'#spg-primary .pri-hero-sub',      en:null, mr:null, mrHTML:'इयत्ता 1 ते 4 — वाचन, संख्याज्ञान, शोध आणि सर्जनशील अभिव्यक्तीद्वारे भक्कम पाया निर्माण करणे.'},

    {s:'#spg-primary .pri-badge', en:null, mr:null, multi:[

      {en:'Classes 1 – 4',               mr:'इयत्ता 1 – 4'},

      {en:'Activity-based Learning',     mr:'कृतिशील शिक्षण'},

      {en:'Collaborative Classrooms',    mr:'सहकार्यपूर्ण वर्गखोल्या'}

    ]},

    {s:'#spg-primary .pri-stat-lbl', en:null, mr:null, multi:[

      {en:'Classes (1 · 2 · 3 · 4)', mr:'वर्ग (1 · 2 · 3 · 4)'},

      {en:'Subjects & Activities',    mr:'विषय व उपक्रम'},

      {en:'Student-teacher ratio',    mr:'विद्यार्थी-शिक्षक प्रमाण'},

      {en:'Holistic development',     mr:'सर्वांगीण विकास'}

    ]},

    {s:'#spg-primary .pri-section-tag', en:null, mr:null, multi:[

      {en:'Our Classes',       mr:'आमचे वर्ग'},

      {en:'Curriculum',        mr:'अभ्यासक्रम'},

      {en:'Teaching Approach', mr:'शिक्षण पद्धती'},

      {en:'Skills We Build',   mr:'आम्ही घडवतो असे कौशल्ये'},

      {en:'Admissions',        mr:'प्रवेश प्रक्रिया'},

      {en:'Apply Now',         mr:'आताच अर्ज करा'}

    ]},

    {s:'#spg-primary .pri-section h2', en:null, mr:null, multi:[

      {en:'Four Years of Foundation Building', mr:'पायाभूत विकासाची चार वर्षे'},

      {en:'What Students Learn',               mr:'विद्यार्थी काय शिकतात'},

      {en:'How We Teach',                      mr:'आम्ही कसे शिकवतो'},

      {en:'Beyond the Textbook',               mr:'पाठ्यपुस्तकापलीकडे'},

      {en:'How to Apply',                      mr:'अर्ज कसा करावा'},

      {en:'Apply for Admission',               mr:'प्रवेशासाठी अर्ज करा'}

    ]},

    {s:'#spg-primary .pri-class-card h3', en:null, mr:null, multi:[

      {en:'Class 1', mr:'इयत्ता 1'},

      {en:'Class 2', mr:'इयत्ता 2'},

      {en:'Class 3', mr:'इयत्ता 3'},

      {en:'Class 4', mr:'इयत्ता 4'}

    ]},

    {s:'#spg-primary .pri-class-age', en:null, mr:null, multi:[

      {en:'Age 6 – 7 years',  mr:'वय 6 – 7 वर्षे'},

      {en:'Age 7 – 8 years',  mr:'वय 7 – 8 वर्षे'},

      {en:'Age 8 – 9 years',  mr:'वय 8 – 9 वर्षे'},

      {en:'Age 9 – 10 years', mr:'वय 9 – 10 वर्षे'}

    ]},

    {s:'#spg-primary .pri-step h4', en:null, mr:null, multi:[

      {en:'Application Submission',              mr:'अर्ज सादर करणे'},

      {en:'Student Interaction',                 mr:'विद्यार्थी संवाद'},

      {en:'Document Verification & Fee Payment', mr:'कागदपत्र पडताळणी व शुल्क भरणा'},

      {en:'Final Admission Confirmation',        mr:'अंतिम प्रवेश पुष्टी'}

    ]},

    {s:'#spg-primary .pri-submit-btn', en:'Submit Application', mr:'अर्ज सादर करा', keepIcon:true},

    {s:'#spg-primary .pri-success h3', en:'Application Submitted!', mr:'अर्ज सादर झाला!'},



    /* ══ MIDDLE ══ */

    {s:'#spg-middle .mid-eyebrow',      en:'Middle School',       mr:'माध्यमिक शाळा'},

    {s:'#spg-middle h1',                en:null, mr:null, mrHTML:'<span>माध्यमिक</span><br>शाळा'},

    {s:'#spg-middle .mid-hero-sub',     en:null, mr:null, mrHTML:'इयत्ता 5 ते 7 — जिज्ञासा, आत्मविश्वास आणि स्वातंत्र्य वाढवणे.'},

    {s:'#spg-middle .mid-badge', en:null, mr:null, multi:[

      {en:'Classes 5 – 7',            mr:'इयत्ता 5 – 7'},

      {en:'Inquiry-based Learning',   mr:'शोध-आधारित शिक्षण'},

      {en:'Collaborative Projects',   mr:'सहकार्यपूर्ण प्रकल्प'}

    ]},

    {s:'#spg-middle .mid-stat-lbl', en:null, mr:null, multi:[

      {en:'Classes (5 · 6 · 7)',    mr:'वर्ग (5 · 6 · 7)'},

      {en:'Subjects & Activities',  mr:'विषय व उपक्रम'},

      {en:'Student-teacher ratio',  mr:'विद्यार्थी-शिक्षक प्रमाण'},

      {en:'Holistic development',   mr:'सर्वांगीण विकास'}

    ]},

    {s:'#spg-middle .mid-section-tag', en:null, mr:null, multi:[

      {en:'Our Classes',       mr:'आमचे वर्ग'},

      {en:'Curriculum',        mr:'अभ्यासक्रम'},

      {en:'Teaching Approach', mr:'शिक्षण पद्धती'},

      {en:'Skills We Build',   mr:'आम्ही घडवतो असे कौशल्ये'},

      {en:'Admissions',        mr:'प्रवेश प्रक्रिया'},

      {en:'Apply Now',         mr:'आताच अर्ज करा'}

    ]},

    {s:'#spg-middle .mid-section h2', en:null, mr:null, multi:[

      {en:'Three Years of Growing Depth', mr:'खोली वाढवणारी तीन वर्षे'},

      {en:'What Students Learn',          mr:'विद्यार्थी काय शिकतात'},

      {en:'How We Teach',                 mr:'आम्ही कसे शिकवतो'},

      {en:'Preparing Future Leaders',     mr:'भविष्यातील नेते घडवणे'},

      {en:'How to Apply',                 mr:'अर्ज कसा करावा'},

      {en:'Apply for Admission',          mr:'प्रवेशासाठी अर्ज करा'}

    ]},

    {s:'#spg-middle .mid-class-card h3', en:null, mr:null, multi:[

      {en:'Class 5', mr:'इयत्ता 5'},

      {en:'Class 6', mr:'इयत्ता 6'},

      {en:'Class 7', mr:'इयत्ता 7'}

    ]},

    {s:'#spg-middle .mid-class-age', en:null, mr:null, multi:[

      {en:'Age 10 – 11 years', mr:'वय 10 – 11 वर्षे'},

      {en:'Age 11 – 12 years', mr:'वय 11 – 12 वर्षे'},

      {en:'Age 12 – 13 years', mr:'वय 12 – 13 वर्षे'}

    ]},

    {s:'#spg-middle .mid-step h4', en:null, mr:null, multi:[

      {en:'Application Submission',              mr:'अर्ज सादर करणे'},

      {en:'Student Interaction',                 mr:'विद्यार्थी संवाद'},

      {en:'Document Verification & Fee Payment', mr:'कागदपत्र पडताळणी व शुल्क भरणा'},

      {en:'Final Admission Confirmation',        mr:'अंतिम प्रवेश पुष्टी'}

    ]},

    {s:'#spg-middle .mid-submit-btn', en:'Submit Application', mr:'अर्ज सादर करा', keepIcon:true},

    {s:'#spg-middle .mid-success h3', en:'Application Submitted!', mr:'अर्ज सादर झाला!'},



    /* ══ HIGH SCHOOL ══ */

    {s:'#spg-high .hi-eyebrow',      en:'High School',         mr:'उच्च माध्यमिक शाळा'},

    {s:'#spg-high h1',               en:null, mr:null, mrHTML:'<span>उच्च माध्यमिक</span><br>शाळा'},

    {s:'#spg-high .hi-hero-sub',     en:null, mr:null, mrHTML:'इयत्ता 8 ते 10 — सखोल समज, उद्देशपूर्ण अभ्यास सवयी आणि पुढील प्रवासासाठी आत्मविश्वास विकसित करणे.'},

    {s:'#spg-high .hi-badge', en:null, mr:null, multi:[

      {en:'Classes 8 – 10',          mr:'इयत्ता 8 – 10'},

      {en:'Concept-based Learning',  mr:'संकल्पना-आधारित शिक्षण'},

      {en:'Exam Preparation',        mr:'परीक्षा तयारी'}

    ]},

    {s:'#spg-high .hi-stat-lbl', en:null, mr:null, multi:[

      {en:'Classes (8 · 9 · 10)',    mr:'वर्ग (8 · 9 · 10)'},

      {en:'Core subjects',           mr:'मुख्य विषय'},

      {en:'Student-teacher ratio',   mr:'विद्यार्थी-शिक्षक प्रमाण'},

      {en:'Board-exam readiness',    mr:'बोर्ड परीक्षा तयारी'}

    ]},

    {s:'#spg-high .hi-section-tag', en:null, mr:null, multi:[

      {en:'Overview',                mr:'परिचय'},

      {en:'Curriculum',              mr:'अभ्यासक्रम'},

      {en:'Learning Approach',       mr:'शिक्षण पद्धती'},

      {en:'Academic Preparation',    mr:'शैक्षणिक तयारी'},

      {en:'Admissions',              mr:'प्रवेश प्रक्रिया'},

      {en:'Apply Now',               mr:'आताच अर्ज करा'}

    ]},

    {s:'#spg-high .hi-section h2', en:null, mr:null, multi:[

      {en:'Where Foundations Become Futures', mr:'पाया भविष्य बनतो तेव्हा'},

      {en:'What Students Learn',              mr:'विद्यार्थी काय शिकतात'},

      {en:'How We Teach',                     mr:'आम्ही कसे शिकवतो'},

      {en:'Prepared for Success',             mr:'यशासाठी सज्ज'},

      {en:'How to Apply',                     mr:'अर्ज कसा करावा'},

      {en:'Admission Application Form',       mr:'प्रवेश अर्ज फॉर्म'}

    ]},

    {s:'#spg-high .hi-class-card h3', en:null, mr:null, multi:[

      {en:'Class 8',  mr:'इयत्ता 8'},

      {en:'Class 9',  mr:'इयत्ता 9'},

      {en:'Class 10', mr:'इयत्ता 10'}

    ]},

    {s:'#spg-high .hi-class-age', en:null, mr:null, multi:[

      {en:'Age 13 – 14 years', mr:'वय 13 – 14 वर्षे'},

      {en:'Age 14 – 15 years', mr:'वय 14 – 15 वर्षे'},

      {en:'Age 15 – 16 years', mr:'वय 15 – 16 वर्षे'}

    ]},

    {s:'#spg-high .hi-step h4', en:null, mr:null, multi:[

      {en:'Submit Application',              mr:'अर्ज सादर करा'},

      {en:'Student Interaction',             mr:'विद्यार्थी संवाद'},

      {en:'Document Verification',           mr:'कागदपत्र पडताळणी'},

      {en:'Approval & Fee Payment',          mr:'मंजुरी व शुल्क भरणा'},

      {en:'Confirmation',                    mr:'अंतिम पुष्टी'}

    ]},

    {s:'#spg-high .hi-submit-btn', en:'Submit Application', mr:'अर्ज सादर करा', keepIcon:true},

    {s:'#spg-high .hi-success h3', en:'Application Received', mr:'अर्ज प्राप्त झाला'},



    /* ── shared form labels across all 4 sub-pages ── */

    {s:'#spg-preprimary label[for],#spg-preprimary .pp-field label,#spg-primary .pri-field label,#spg-middle .mid-field label,#spg-high .hi-field label', en:null, mr:null, multi:[

      {en:"Student's Full Name",       mr:"विद्यार्थ्याचे पूर्ण नाव"},

      {en:"Date of Birth",             mr:"जन्मतारीख"},

      {en:"Gender",                    mr:"लिंग"},

      {en:"Applying for",              mr:"प्रवेश इयत्ता"},

      {en:"Parent / Guardian Name",    mr:"पालक / संरक्षकाचे नाव"},

      {en:"Mobile Number",             mr:"मोबाईल नंबर"},

      {en:"Email Address",             mr:"ईमेल पत्ता"},

      {en:"Residential Address",       mr:"राहण्याचा पत्ता"},

      {en:"Previous School",           mr:"मागील शाळा"},

      {en:"Previous School Name",      mr:"मागील शाळेचे नाव"},

      {en:"Student's Photo",           mr:"विद्यार्थ्याचा फोटो"},

      {en:"Birth Certificate",         mr:"जन्म प्रमाणपत्र"},

      {en:"Previous Academic Records", mr:"मागील शैक्षणिक नोंदी"}

    ]}

  ];



  /* ── English originals cache ── */

  var cache = {};



  function saveEN(el, useHTML) {

    var k = el; // use element reference as key via index

    if (!el._i18nEN) el._i18nEN = useHTML ? el.innerHTML : el.textContent;

  }



  function applyEntry(entry, lang) {
    // The old Pre-Primary selectors describe an obsolete page and change its meaning.
    if (entry.s.indexOf('#spg-preprimary') !== -1) return;

    if (entry.multi) {

      /* handle multi: match each element to its translation by index */

      var nodes = document.querySelectorAll(entry.s);

      nodes.forEach(function(el, i) {

        if (!el._i18nEN) el._i18nEN = el.innerHTML;

        var pair = entry.multi[i] || entry.multi[entry.multi.length - 1];

        if (!pair) return;

        if (lang === 'mr') {

          /* match by English text content to find right pair */

          var text = el.textContent.trim();

          var matched = entry.multi.find(function(p){ return p.en && text.includes(p.en.split('&')[0].trim()); });

          if (!matched) matched = entry.multi[i];

          if (matched) el.textContent = matched.mr;

        } else {

          if (el._i18nEN) el.innerHTML = el._i18nEN;

        }

      });

      return;

    }



    var nodes = document.querySelectorAll(entry.s);

    nodes.forEach(function(el) {

      if (!el._i18nEN) el._i18nEN = el.innerHTML;

      if (lang === 'mr') {

        if (entry.mrHTML) {

          el.innerHTML = entry.mrHTML;

        } else if (entry.mr) {

          if (entry.keepIcon) {

            var icon = el.querySelector('i');

            el.textContent = ' ' + entry.mr;

            if (icon) el.insertBefore(icon, el.firstChild);

          } else {

            el.textContent = entry.mr;

          }

        }

      } else {

        el.innerHTML = el._i18nEN;

      }

    });

  }



  function applySubPageLang(lang) {

    T.forEach(function(entry) { applyEntry(entry, lang); });

  }



  document.addEventListener('i18n:changed', function(e) {

    applySubPageLang(e.detail && e.detail.lang);

  });

  document.addEventListener('i18n:ready', function(e) {

    applySubPageLang(e.detail && e.detail.lang);

  });

}());



/* <script data-inlined-source="app.js"> (original line 22629) */


function initNoticeMarquee() {

  const bar = document.getElementById("noticeMarqueeBar");

  if (!bar) return;



  // This scrolling notice bar should only ever show on the home page

  // (index.html). On every other page, remove it from the header entirely.

  const isHomePage = SCHOOL_PAGE !== "home" || normalizePagePath(window.location.pathname) === "index";

  if (!isHomePage) {

    bar.remove();

    return;

  }



  if (bar.dataset.bound) return;

  bar.dataset.bound = "true";



  // Pause the auto-scroll on hover so people can read/click a notice.

  bar.addEventListener("mouseenter", () => bar.classList.add("paused"));

  bar.addEventListener("mouseleave", () => bar.classList.remove("paused"));

}





function normalizePagePath(path) {

  // Drop any query string / hash, take just the filename part,

  // strip a trailing ".html" and lowercase it so that live-server

  // quirks (pretty URLs without .html, trailing slashes, different

  // casing, etc.) don't break the comparison the way they can when

  // the host's URL structure differs slightly from a local server.

  if (!path) return "index";

  let p = path.split("?")[0].split("#")[0];

  p = p.split("/").filter(Boolean).pop() || "index.html";

  p = p.toLowerCase().replace(/\.html$/, "");

  return p || "index";

}



function setActiveNav() {
  if (SCHOOL_PAGE !== "home") { setStandaloneNav(); return; }

  const currentPage = normalizePagePath(window.location.pathname);



  document.querySelectorAll(".nav-links a, #mobileMenu a").forEach(link => {

    const href = link.getAttribute("href");

    if (!href) return;

    // Only compare plain same-page links. Skip "#" anchors, external, mailto,

    // tel links, AND any link that jumps to a section on a page (contains a

    // "#"), e.g. "aboutus.html#vm" or "aboutus.html#mt" — otherwise every

    // in-page anchor link normalizes to the same page name and all of them

    // (About Us, Our School, Vision & Mission, Our Motto, ...) light up as

    // "active" together any time you're anywhere on that page.

    if (href.includes("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {

      return;

    }

    const linkPage = normalizePagePath(href);

    link.classList.toggle("active", linkPage === currentPage);

  });

}



document.addEventListener("DOMContentLoaded", () => {

  setTimeout(setActiveNav, 100);

});





/* =========================================================

   STICKY NAVBAR (desktop)

========================================================= */

// Desktop nav: fixed but tracks header until header scrolls away, then locks at top.

// Mobile/tablet: handled by their own fixed CSS — inline styles cleared.

const navbarEl = document.querySelector(".nav-container");

const headerTopEl = document.querySelector(".header-top");

const headerWrapEl = document.getElementById("header");



function setupDesktopLayout() {

  const noticeBar = document.getElementById("noticeMarqueeBar");

  if (window.innerWidth >= 1201 && navbarEl) {

    const navH = navbarEl.offsetHeight;

    // Nav is position:fixed (removed from flow); push notice bar below it

    if (noticeBar) noticeBar.style.marginTop = navH + "px";

    if (headerWrapEl) headerWrapEl.style.paddingBottom = "";

  } else {

    if (noticeBar) noticeBar.style.marginTop = "";

    if (headerWrapEl) headerWrapEl.style.paddingBottom = "";

  }

}



function updateNav() {

  if (!navbarEl) return;

  if (window.innerWidth >= 1201 && headerTopEl) {

    const headerH = headerTopEl.offsetHeight;

    // Track below header until it scrolls away, then lock at 0

    navbarEl.style.top = Math.max(0, headerH - window.scrollY) + "px";

    navbarEl.classList.toggle("scrolled", window.scrollY >= headerH);

    navbarEl.classList.toggle("sticky", window.scrollY > 10);

  } else {

    // Mobile/tablet: clear all desktop inline styles

    navbarEl.style.top = "";

    if (headerWrapEl) headerWrapEl.style.paddingBottom = "";

    const noticeBarEl = document.getElementById("noticeMarqueeBar");

    if (noticeBarEl) noticeBarEl.style.marginTop = "";

    const threshold = headerTopEl ? headerTopEl.offsetHeight : 0;

    navbarEl.classList.toggle("scrolled", window.scrollY > threshold);

    navbarEl.classList.toggle("sticky", window.scrollY > 10);

  }

}



window.addEventListener("scroll", updateNav, { passive: true });

window.addEventListener("resize", () => { setupDesktopLayout(); updateNav(); }, { passive: true });

requestAnimationFrame(() => { setupDesktopLayout(); updateNav(); });





/* =========================================================

   ALUMNI / LOGIN BUTTON -> EXTERNAL REDIRECT

   (Previously opened a popup modal. Now sends the user straight

   to the external login/portal URL below.)

========================================================= */

// LOGIN DESTINATION: shared by the desktop and mobile Login buttons.

const ALUMNI_LOGIN_URL = "https://mocc.myclassboard.com/login";



function initAlumniModal() {

  const alumniBtns = document.querySelectorAll(".alumni-btn");



  alumniBtns.forEach(btn => {

    // Remove any existing inline onclick to avoid double-firing

    btn.removeAttribute("onclick");

    btn.addEventListener("click", () => {

      window.location.assign(ALUMNI_LOGIN_URL);

    });

  });

}





/* =========================================================
   DESKTOP / TABLET DROPDOWNS — hover, touch and keyboard
========================================================= */
function initDesktopDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll('.nav-container .dropdown, .khopoli-tablet-menu .dropdown'));

  function setOpen(item, open) {
    item.classList.toggle('nav-dropdown-open', open);
    const trigger = item.querySelector(':scope > a');
    if (trigger) trigger.setAttribute('aria-expanded', String(open));
    if (!open) {
      item.querySelectorAll('.nav-dropdown-open').forEach(child => child.classList.remove('nav-dropdown-open'));
      item.querySelectorAll('[aria-expanded="true"]').forEach(control => control.setAttribute('aria-expanded', 'false'));
    }
  }

  function closeAll(except) {
    dropdowns.forEach(item => { if (item !== except) setOpen(item, false); });
  }

  dropdowns.forEach(item => {
    const trigger = item.querySelector(':scope > a');
    if (!trigger) return;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', event => {
      if (trigger.getAttribute('href') === '#') event.preventDefault();
      event.stopPropagation();
      const willOpen = !item.classList.contains('nav-dropdown-open');
      closeAll(willOpen ? item : null);
      setOpen(item, willOpen);
    });
    item.addEventListener('mouseenter', () => trigger.setAttribute('aria-expanded', 'true'));
    item.addEventListener('mouseleave', () => {
      if (!item.classList.contains('nav-dropdown-open')) trigger.setAttribute('aria-expanded', 'false');
    });
    item.addEventListener('focusin', () => trigger.setAttribute('aria-expanded', 'true'));
    item.addEventListener('focusout', event => {
      if (!item.contains(event.relatedTarget) && !item.classList.contains('nav-dropdown-open')) trigger.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('.nav-container .has-submenu, .khopoli-tablet-menu .has-submenu').forEach(item => {
    const trigger = item.querySelector(':scope > a');
    if (!trigger) return;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', event => {
      if (trigger.getAttribute('href') === '#') event.preventDefault();
      event.stopPropagation();
      const willOpen = !item.classList.contains('nav-dropdown-open');
      item.parentElement.querySelectorAll(':scope > .has-submenu.nav-dropdown-open').forEach(sibling => {
        if (sibling !== item) setOpen(sibling, false);
      });
      setOpen(item, willOpen);
    });
  });

  document.addEventListener('click', () => closeAll(null));
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const openItem = dropdowns.find(item => item.classList.contains('nav-dropdown-open'));
    if (!openItem) return;
    const trigger = openItem.querySelector(':scope > a');
    closeAll(null);
    if (trigger) trigger.focus();
  });
}


/* =========================================================

   MOBILE MENU — slide-in drawer

========================================================= */

function initMobileMenu() {

  const mobileMenu    = document.getElementById("mobileMenu");

  const overlay       = document.getElementById("mobileMenuOverlay");

  const closeBtn      = document.getElementById("closeMobileMenu");



  const toggleBtns = [

    document.getElementById("menuToggle"),

    document.getElementById("mobileMenuToggle")

  ].filter(Boolean);



  if (!mobileMenu) return;



  let scrollY = 0;
  let previousFocus = null;
  let previousBodyStyles = null;
  const focusableSelector = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

  function setMenuExpanded(expanded) {
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-expanded', String(expanded));
      btn.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
    });
    mobileMenu.setAttribute('aria-hidden', String(!expanded));
  }



  function openMenu() {

    if (mobileMenu.classList.contains("active")) return;

    previousFocus = document.activeElement;

    mobileMenu.classList.add("active");

    if (overlay) overlay.classList.add("active");

    setMenuExpanded(true);



    // iOS Safari ignores body{overflow:hidden} for touch scrolling, so

    // the page behind the drawer would still scroll. Pinning the body

    // in place with position:fixed is the reliable cross-browser fix,

    // and lets touches inside the drawer scroll its own list instead.

    scrollY = window.scrollY || window.pageYOffset || 0;

    previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow
    };

    document.body.style.position = "fixed";

    document.body.style.top = `-${scrollY}px`;

    document.body.style.left = "0";

    document.body.style.right = "0";

    document.body.style.width = "100%";

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => { if (closeBtn) closeBtn.focus(); });

  }



  function closeMenu(restoreFocus = true) {

    if (!mobileMenu.classList.contains("active")) return;

    mobileMenu.classList.remove("active");

    if (overlay) overlay.classList.remove("active");

    setMenuExpanded(false);



    document.body.style.position = previousBodyStyles ? previousBodyStyles.position : "";

    document.body.style.top = previousBodyStyles ? previousBodyStyles.top : "";

    document.body.style.left = previousBodyStyles ? previousBodyStyles.left : "";

    document.body.style.right = previousBodyStyles ? previousBodyStyles.right : "";

    document.body.style.width = previousBodyStyles ? previousBodyStyles.width : "";

    document.body.style.overflow = previousBodyStyles ? previousBodyStyles.overflow : "";

    window.scrollTo(0, scrollY);



    mobileMenu.querySelectorAll(".mob-dropdown-toggle.open").forEach(t => {

      t.classList.remove("open");

      t.setAttribute("aria-expanded", "false");

      t.nextElementSibling.classList.remove("open");

    });

    mobileMenu.querySelectorAll('.mob-sub-heading.open').forEach(heading => {
      heading.classList.remove('open');
      heading.setAttribute('aria-expanded', 'false');
      if (heading.nextElementSibling) heading.nextElementSibling.classList.remove('open');
    });

    if (restoreFocus && previousFocus && previousFocus.isConnected) previousFocus.focus();

  }



  toggleBtns.forEach(btn => {

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      if (mobileMenu.classList.contains("active")) {

        closeMenu();

      } else {

        openMenu();

      }

    });

  });

  /* The legacy header toggle is a div; make Enter and Space operate it like a button. */
  toggleBtns.forEach(btn => {
    if (btn.tagName === 'BUTTON') return;
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });



  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  if (overlay)  overlay.addEventListener("click", closeMenu);



  mobileMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => closeMenu());

  });



  /* Accordion dropdowns */

  mobileMenu.querySelectorAll(".mob-dropdown-toggle").forEach(toggle => {

    toggle.addEventListener("click", (e) => {

      e.stopPropagation();

      const panel   = toggle.nextElementSibling;

      const isOpen  = toggle.classList.contains("open");



      mobileMenu.querySelectorAll(".mob-dropdown-toggle.open").forEach(t => {

        if (t !== toggle) {

          t.classList.remove("open");

          t.setAttribute("aria-expanded", "false");

          t.nextElementSibling.classList.remove("open");

        }

      });



      toggle.classList.toggle("open", !isOpen);

      toggle.setAttribute("aria-expanded", String(!isOpen));

      panel.classList.toggle("open", !isOpen);

    });

  });

  mobileMenu.querySelectorAll('.mob-sub-heading').forEach(heading => {
    function toggleSubgroup() {
      const willOpen = !heading.classList.contains('open');
      heading.classList.toggle('open', willOpen);
      heading.setAttribute('aria-expanded', String(willOpen));
      if (heading.nextElementSibling) heading.nextElementSibling.classList.toggle('open', willOpen);
    }
    heading.addEventListener('click', toggleSubgroup);
    heading.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSubgroup();
      }
    });
  });



  document.addEventListener("keydown", e => {

    if (!mobileMenu.classList.contains('active')) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = Array.from(mobileMenu.querySelectorAll(focusableSelector)).filter(el =>
        el.offsetParent !== null &&
        !el.closest('.mob-dropdown-panel:not(.open), .mob-sub-links:not(.open), .lang-dropdown:not(.open)')
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1200 && mobileMenu.classList.contains('active')) closeMenu(false);
  }, { passive:true });

}





/* =========================================================

   HERO SLIDER

========================================================= */

/* ── Hero Slideshow ─────────────────────────────────────────────

   Photos live in the HTML above (the <img> tags inside .slides-full).

   Edit ONLY those img lines to add, remove or reorder slides.

   This JS reads whatever is there and adapts automatically.

   ─────────────────────────────────────────────────────────────── */

let currentSlide  = 0;

let slidesFull    = [];

let slideInterval;

let heroZoomCleanup;

// Change 6000 to a different number of milliseconds to make the slides faster or slower.

const HERO_SLIDE_DURATION = 6000;

const heroReducedMotion   = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);



document.addEventListener("DOMContentLoaded", () => {

  slidesFull = Array.from(document.querySelectorAll(".slide-full"));

  if (slidesFull.length === 0) return;



  // ── Build dot buttons from slide count ──

  const dotsWrap = document.getElementById("hero-dots");

  if (dotsWrap) {

    slidesFull.forEach(function(_, i) {

      const btn = document.createElement("button");

      btn.type        = "button";

      btn.className   = "hero-dot" + (i === 0 ? " active" : "");

      btn.setAttribute("aria-label",   "Go to slide " + (i + 1));

      btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");

      btn.addEventListener("click", function() { goToSlide(i); resetHeroInterval(); });

      dotsWrap.appendChild(btn);

    });

  }



  // ── Hide arrows and dots when only 1 slide ──

  if (slidesFull.length <= 1) {

    document.querySelectorAll(".arrow-full").forEach(function(a) { a.style.display = "none"; });

    if (dotsWrap) dotsWrap.style.display = "none";

  }



  showSlide(currentSlide);



  // ── Autoplay (paused when prefers-reduced-motion is on) ──

  if (!heroReducedMotion) {

    slideInterval = setInterval(nextSlide, HERO_SLIDE_DURATION);

  }



  // ── Pause on mouse hover ──

  const container = document.getElementById("hero-slider");

  if (container) {

    container.addEventListener("mouseenter", pauseHeroAutoplay);

    container.addEventListener("mouseleave", function() {

      if (!heroReducedMotion) slideInterval = setInterval(nextSlide, HERO_SLIDE_DURATION);

    });

    // ── Pause when any control inside hero has keyboard focus ──

    container.addEventListener("focusin",  pauseHeroAutoplay);

    container.addEventListener("focusout", function(e) {

      if (!container.contains(e.relatedTarget)) {

        if (!heroReducedMotion) slideInterval = setInterval(nextSlide, HERO_SLIDE_DURATION);

      }

    });

  }



  // ── Touch swipe ──

  var heroTouchX = 0;

  var heroEl = document.querySelector(".hero-full");

  if (heroEl) {

    heroEl.addEventListener("touchstart", function(e) {

      heroTouchX = e.touches[0].clientX;

    }, { passive: true });

    heroEl.addEventListener("touchend", function(e) {

      var dx = e.changedTouches[0].clientX - heroTouchX;

      if (Math.abs(dx) > 40) {

        if (dx < 0) { nextSlide(); } else { prevSlide(); }

        resetHeroInterval();

      }

    }, { passive: true });

  }

});



function pauseHeroAutoplay() {

  clearInterval(slideInterval);

}



function resetHeroInterval() {

  clearInterval(slideInterval);

  if (!heroReducedMotion) {

    slideInterval = setInterval(nextSlide, HERO_SLIDE_DURATION);

  }

}



function showSlide(index) {

  // Leave the outgoing motion class in place for the opacity fade.
  // A zoom-in slide therefore holds its final scale while the next
  // zoom-out slide begins at the same scale.

  slidesFull.forEach(function(slide) {

    slide.classList.remove("active");

  });

  // Activate the chosen slide

  slidesFull[index].classList.add("active");

  // Alternate the direction of the slow zoom for every consecutive slide.

  if (!heroReducedMotion) {

    requestAnimationFrame(function() {

      if (slidesFull[index]) {

        slidesFull[index].classList.add(index % 2 === 0 ? "hero-zoom-in" : "hero-zoom-out");

      }

    });

  }

  // Remove the hidden slides' frozen motion state after the one-second fade.
  clearTimeout(heroZoomCleanup);

  heroZoomCleanup = setTimeout(function() {

    slidesFull.forEach(function(slide) {

      if (!slide.classList.contains("active")) {

        slide.classList.remove("hero-zoom-in");

        slide.classList.remove("hero-zoom-out");

      }

    });

  }, 1050);

  // Update dot indicators

  document.querySelectorAll(".hero-dot").forEach(function(dot, i) {

    var isActive = (i === index);

    dot.classList.toggle("active", isActive);

    dot.setAttribute("aria-pressed", isActive ? "true" : "false");

  });

}



function goToSlide(i) {

  currentSlide = i;

  showSlide(currentSlide);

}



function nextSlide() {

  currentSlide = (currentSlide + 1) % slidesFull.length;

  showSlide(currentSlide);

}



function prevSlide() {

  currentSlide = (currentSlide - 1 + slidesFull.length) % slidesFull.length;

  showSlide(currentSlide);

}













document.addEventListener("DOMContentLoaded",()=>{if(window.AOS)AOS.init({duration:900,once:true,offset:40});initDesktopDropdowns();initMobileMenu();initAlumniModal();setActiveNav();initNoticeMarquee();});

const nav=document.querySelector(".nav-container"),topHeader=document.querySelector(".header-top");window.addEventListener("scroll",()=>{if(innerWidth>1200){nav.classList.toggle("sticky",scrollY>120);topHeader.classList.toggle("hide",scrollY>120);}});document.querySelectorAll(".arrow-full").forEach(a=>a.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();a.click();}}));let touchStart=0;const hero=document.querySelector(".hero-full");if(hero){hero.addEventListener("touchstart",e=>touchStart=e.changedTouches[0].clientX,{passive:true});hero.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-touchStart;if(Math.abs(d)>60)d>0?prevSlide():nextSlide();},{passive:true});}



/* <script data-inlined-source="journey.js"> (original line 23662) */
if (SCHOOL_PAGE === "home") {


(() => {

  const root = document.querySelector('.journey');

  const result = document.querySelector('#journey-result');

  if (!root || !result) return;



  const stages = {

    'Pre-Primary': { years: 'Nursery, LKG & UKG', title: 'Pre-Primary', text: 'A warm start where play, language, movement and discovery build confidence for every new school day.' },

    Primary: { years: 'Classes 1 to 4', title: 'Primary School', text: 'Strong foundations in literacy, numeracy, science and creative learning, with care for each child’s growing confidence.' },

    Middle: { years: 'Classes 5 to 7', title: 'Middle School', text: 'A time to deepen curiosity, discover strengths and build study habits through academics, activities and collaboration.' },

    High: { years: 'Classes 8 to 10', title: 'High School', text: 'Focused academic preparation, independent thinking and guidance for confident progression into the next stage.' }

  };

  let grade = localStorage.getItem('stmarysJourneyGrade') || 'Pre-Primary';

  const interests = new Set(JSON.parse(localStorage.getItem('stmarysJourneyInterests') || '[]'));

  const gradeButtons = [...root.querySelectorAll('[data-grade]')];

  const interestButtons = [...root.querySelectorAll('.journey-interests .journey-choice')];

  function sync() {

    gradeButtons.forEach(button => {

      const selected = button.dataset.grade === grade;

      button.classList.toggle('is-selected', selected);

      button.setAttribute('aria-pressed', String(selected));

    });

    interestButtons.forEach(button => {

      const selected = interests.has(button.textContent.trim());

      button.classList.toggle('is-selected', selected);

      button.setAttribute('aria-pressed', String(selected));

    });

  }

  gradeButtons.forEach(button => button.addEventListener('click', () => {

    grade = button.dataset.grade;

    localStorage.setItem('stmarysJourneyGrade', grade);

    root.querySelector('#journey-error').hidden = true;

    sync();

  }));

  interestButtons.forEach(button => button.addEventListener('click', () => {

    const interest = button.textContent.trim();

    interests.has(interest) ? interests.delete(interest) : interests.add(interest);

    localStorage.setItem('stmarysJourneyInterests', JSON.stringify([...interests]));

    sync();

  }));

  root.querySelector('#journey-form').addEventListener('submit', event => {

    event.preventDefault();

    if (!grade) { root.querySelector('#journey-error').hidden = false; return; }

    const child = 'Your child';

    const stage = stages[grade];

    const selectedInterests = [...interests];

    const interestText = selectedInterests.length ? `Interests: ${selectedInterests.join(', ')}` : 'Interests can be added anytime.';

    result.dataset.grade = grade;

    result.innerHTML = `<div class="journey-plan-top"><span>Their plan</span><h2>${child}'s journey</h2><button type="button" class="journey-restart">Start over</button></div><div class="journey-plan-grid"><article class="journey-plan-card"><small>${stage.years}</small><h3>${stage.title}</h3><p>${stage.text}</p><p class="journey-plan-interest">${interestText}</p></article><article class="journey-plan-card"><h3>Next steps</h3><ul><li>Explore the learning experiences they will enjoy</li><li>Book a campus visit</li><li>Start the admission process</li><li>Share this plan with family</li></ul></article></div>`;

    result.hidden = false;

    const stageBgs={'Pre-Primary':'images/journey-preprimary-bg.png','Primary':'images/journey-primary-bg.png','Middle':'images/journey-middle-bg.png','High':'images/journey-high-bg.png'};

    if(stageBgs[grade]){result.style.backgroundImage='url('+stageBgs[grade]+')';result.style.backgroundSize='cover';result.style.backgroundPosition='center';}

    result.querySelector('.journey-restart').addEventListener('click', () => {

      result.hidden = true;

      root.querySelector('#journey-form').scrollIntoView({ behavior: 'smooth', block: 'center' });

    });

    result.focus();

    result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });

  });

  root.addEventListener('pointermove', event => {

    const bounds = root.getBoundingClientRect();

    root.style.setProperty('--mx', `${event.clientX - bounds.left}px`);

    root.style.setProperty('--my', `${event.clientY - bounds.top}px`);

  });

  root.querySelector('.journey-browse').addEventListener('click', event => {

    event.preventDefault();

    document.querySelector('#main').scrollIntoView({ behavior: 'smooth' });

  });

  sync();

})();






}

/* <script data-inlined-source="school-road.js"> (original line 23806) */
if (SCHOOL_PAGE === "home") {


(() => {

  const section = document.querySelector('.school-road');

  if (!section) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  const stages = [

    ['Pre-Primary','Nursery, LKG & UKG','Where our youngest learners begin: stories, songs and play in a safe, caring classroom.'],

    ['Primary','Classes 1 to 4','Building strong foundations through reading, numbers, discovery and creative expression.'],

    ['Middle','Classes 5 to 7','Growing curiosity, confidence and independence through learning and collaboration.'],

    ['High','Classes 8 to 10','Developing deeper understanding, purposeful study habits and confidence for the next chapter.']

  ];

  const galleryPhotos = [...document.querySelectorAll('.slides-full .slide-full')].map(image => image.currentSrc || image.src);

  

  const stageArt={

    "Pre-Primary":"images/preprimary-globe.png",

    "Primary":"images/ChatGPT Image Oct 31, 2026, 02_34_35 PM.png",

    "Middle":"images/middle-collaboration.png",

    "High":"images/high-achiever.png"

  };

  const host = section.querySelector('.school-road-stages');

  stages.forEach(([stage,range,description],i) => {

    const row=document.createElement('div');row.className='school-road-row';row.dataset.stage=stage;

    const photos = [[galleryPhotos[0],'School campus'],[galleryPhotos[1],'School gathering'],[galleryPhotos[2],'School community']];

    row.innerHTML=`<article class="school-road-card${stageArt[stage] ? ' has-grade-art' : ''}">${stageArt[stage] ? `<div class="school-road-art"><img src="${stageArt[stage]}" alt="${stage} learning activities"></div>` : ''}<span class="school-road-start" hidden>Starts here</span><div class="school-road-gallery" role="region" aria-label="${stage} school photographs"><div class="school-road-slides">${[...photos,photos[0]].map(([src,alt])=>`<img src="${src}" alt="${alt}" loading="lazy" draggable="false">`).join('')}</div><button type="button" class="school-road-arrow prev" aria-label="Previous ${stage} photograph">&#8249;</button><button type="button" class="school-road-arrow next" aria-label="Next ${stage} photograph">&#8250;</button></div><div class="school-road-card-content"><small>${range}</small><h3>${stage}</h3><p>${description}</p><button type="button" class="school-road-explore" data-stage="${stage}" aria-label="Explore ${stage} plan">Explore &rarr;</button></div></article><span class="school-road-number" aria-hidden="true">${i+1}</span>`;

    host.append(row);

    const gallery=row.querySelector('.school-road-gallery'),strip=row.querySelector('.school-road-slides');

    let index=0,timer,hover=false,focus=false,visible=false,paused=reduced.matches,touchX=0,resetTimer;

    function schedule(){clearInterval(timer);if(visible&&!hover&&!focus&&!paused&&!document.hidden)timer=setInterval(()=>move(1),4500)}

    function move(direction){clearTimeout(resetTimer);if(index===3){strip.style.transition='none';index=0;strip.style.transform='translateX(0)';void strip.offsetWidth;}strip.style.transition=reduced.matches?'none':'';index=direction<0?(index+2)%3:index+1;strip.style.transform=`translateX(-${index*100}%)`;if(index===3)resetTimer=setTimeout(()=>{strip.style.transition='none';index=0;strip.style.transform='translateX(0)'},reduced.matches?0:680);schedule()}

    row.querySelector('.prev').onclick=()=>move(-1);row.querySelector('.next').onclick=()=>move(1);

    gallery.addEventListener('mouseenter',()=>{hover=true;schedule()});gallery.addEventListener('mouseleave',()=>{hover=false;schedule()});gallery.addEventListener('focusin',()=>{focus=true;schedule()});gallery.addEventListener('focusout',e=>{if(!gallery.contains(e.relatedTarget)){focus=false;schedule()}});

    gallery.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;hover=true;schedule()},{passive:true});gallery.addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-touchX;hover=false;if(Math.abs(delta)>45)move(delta<0?1:-1);else schedule()},{passive:true});

    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule()},{threshold:.15}).observe(gallery);document.addEventListener('visibilitychange',schedule);reduced.addEventListener('change',()=>{paused=reduced.matches;schedule()});

  });

  const body=section.querySelector('.school-road-body'),svg=section.querySelector('svg'),base=section.querySelector('.school-road-dotted'),progress=section.querySelector('.school-road-progress'),marker=section.querySelector('.school-road-marker'),rows=[...host.children];let length=0,queued=false;

  // ROAD DECORATIONS: change these two colors, or the sizes below, to customize.
  // Decorative SVG only; never captures clicks or appears in screen-reader content.
  const accentLayer=document.createElementNS('http://www.w3.org/2000/svg','g');
  accentLayer.setAttribute('aria-hidden','true');
  accentLayer.style.pointerEvents='none';
  svg.insertBefore(accentLayer,base);
  const sparkShapes=[
    '<path d="M0-7 2-2 7 0 2 2 0 7-2 2-7 0-2-2Z"/>',
    '<circle r="5"/>',
    '<path d="M-5 0H5M0-5V5"/>',
    '<path d="M0-6 6 5H-6Z"/>'
  ];
  const schoolSketches=[
    '<path d="m-30-12 60-13-19 48-14-20-27-15 40-3-13 18M11 23 4 9"/><path d="M-35 4c-34-5-35 24-14 23 20-2 16-21-2-17-12 3-17 18-32 16" stroke-dasharray="3 6"/>',
    '<path d="M0-17c-10-8-23-9-36-6v45c14-4 25-3 36 5 11-8 22-9 36-5v-45c-13-3-26-2-36 6Zm0 0v44M-28-12l19 4M-28-2l19 4M-28 8l19 4M9-8l19-4M9 2l19-4M9 12l19-4"/>',
    '<circle r="28"/><circle r="33" stroke-dasharray="1 7"/><path d="m12-19-7 24-17 14 7-24Z M-5-5 5 5M0-40v5M0 35v5M-40 0h5M35 0h5"/>',
    '<path d="M-13 18v-42l38-7v39M-13-13l38-7"/><ellipse cx="-21" cy="20" rx="8" ry="5" transform="rotate(-20 -21 20)"/><ellipse cx="17" cy="10" rx="8" ry="5" transform="rotate(-20 17 10)"/><path d="M-38-9v-17m0 3 8 5"/>'
  ];
  function decorateRoad(){
    accentLayer.replaceChildren();
    const width=body.clientWidth;
    if(width<817)return; // Keep the narrow mobile road clear and readable.
    const bounds=body.getBoundingClientRect();
    const protectedBoxes=[...body.querySelectorAll('.school-road-card,.school-road-art,.school-road-number')].map(el=>{
      const b=el.getBoundingClientRect();return {l:b.left-bounds.left-24,r:b.right-bounds.left+24,t:b.top-bounds.top-24,b:b.bottom-bounds.top+24};
    });
    const placed=[];
    const roadPoints=Array.from({length:160},(_,i)=>base.getPointAtLength(length*i/159));
    function add(shape,x,y,size,color,opacity){
      if(x-size<0||x+size>width||y-size<0||y+size>body.clientHeight||protectedBoxes.some(b=>x+size>b.l&&x-size<b.r&&y+size>b.t&&y-size<b.b)||placed.some(p=>Math.hypot(x-p.x,y-p.y)<size+p.size+18)||roadPoints.some(p=>Math.hypot(x-p.x,y-p.y)<size+14))return;
      const g=document.createElementNS('http://www.w3.org/2000/svg','g');
      g.setAttribute('transform',`translate(${x} ${y})`);g.setAttribute('fill','none');g.setAttribute('stroke',color);g.setAttribute('stroke-width','1.6');g.setAttribute('stroke-linecap','round');g.setAttribute('stroke-linejoin','round');g.setAttribute('opacity',opacity);g.innerHTML=shape;accentLayer.append(g);
      placed.push({x,y,size});
    }
    rows.forEach((row,i)=>{
      // Four tiny sparks follow each bend with alternating offsets from the road.
      for(let j=0;j<4;j++){
        const p=base.getPointAtLength(length*(i+(j+1)/5)/rows.length);
        add(sparkShapes[(i+j)%4],p.x+(j%2?48:-48),p.y,9,j%2?'#800000':'#c79a3b',.65);
      }
      // One larger sketch in the empty side of each alternating card row.
      const x=width*(i%2===0?.83:.17),y=row.offsetTop+row.offsetHeight*.73;
      add(schoolSketches[i%4],x,y,86,i%2?'#800000':'#c79a3b',.48);
    });
    // CANVAS DOODLE DENSITY: smaller spacing adds more sketches in free areas.
    const extraSketches=[
      '<path d="m-25 20 37-44 12 10-37 44-17 6Zm3 1 12 10M6-17l12 10M-27 32l6-2"/>',
      '<rect x="-34" y="-12" width="68" height="24" rx="3" transform="rotate(-25)"/><path d="m-22 2 3 6m6-10 5 10m5-14 3 6m6-10 5 10m5-14 3 6"/>',
      '<circle cy="-6" r="22"/><path d="M-10 14v12h20V14M-10 31h20M-5 36H5M-7 14V-4l7 5 7-5v18M0-40v-8M-32-29l-6-6M32-29l6-6M-34-6h-8M34-6h8"/>',
      '<circle r="26"/><ellipse rx="12" ry="26"/><path d="M-25 0h50M-21-14h42M-21 14h42M-33-5c-2 24 17 43 41 38M0 34v9M-16 44h32"/>',
      '<path d="m0-34 9 23 25 1-20 16 7 25L0 16l-21 15 7-25-20-16 25-1Z"/>',
      '<path d="M-29 5c-14-3-14-22 0-25 2-23 34-25 42-5 22-9 35 23 13 30Z M-15 15l-5 10M4 15l-5 10M23 15l-5 10"/>'
    ];
    const allSketches=[...schoolSketches,...extraSketches],spacing=180;
    let motif=0;
    for(let y=80,row=0;y<body.clientHeight-65;y+=spacing,row++){
      for(let x=75+(row%2)*85;x<width-65;x+=spacing){
        const index=motif++,scale=.7+(index%3)*.12,angle=(index%5-2)*9;
        add(`<g transform="rotate(${angle}) scale(${scale})">${allSketches[index%allSketches.length]}</g>`,x,y,68,index%3===0?'#800000':'#c79a3b',index%3===0?.27:.48);
        add(sparkShapes[index%4],x+72,y+70,9,index%2?'#800000':'#c79a3b',.5);
      }
    }
    // CREAM CANVAS PLUS PATTERN: edit spacing, color and opacity here.
    // Render after doodle placement so every sketch keeps a clear surrounding area.
    const plusSpacing=46,plusSize=5,plusSegments=[];
    for(let y=23;y<body.clientHeight-plusSize;y+=plusSpacing){
      for(let x=23;x<width-plusSize;x+=plusSpacing){
        if(protectedBoxes.some(b=>x+plusSize>b.l&&x-plusSize<b.r&&y+plusSize>b.t&&y-plusSize<b.b)
          ||placed.some(p=>Math.hypot(x-p.x,y-p.y)<p.size+22)
          ||roadPoints.some(p=>Math.hypot(x-p.x,y-p.y)<28))continue;
        plusSegments.push(`M${x-plusSize} ${y}h${plusSize*2}M${x} ${y-plusSize}v${plusSize*2}`);
      }
    }
    const plusPattern=document.createElementNS('http://www.w3.org/2000/svg','path');
    plusPattern.setAttribute('d',plusSegments.join(' '));
    plusPattern.setAttribute('fill','none');
    plusPattern.setAttribute('stroke','#c79a3b');
    plusPattern.setAttribute('stroke-width','1.8');
    plusPattern.setAttribute('stroke-linecap','round');
    plusPattern.setAttribute('opacity','.42');
    accentLayer.prepend(plusPattern);
  }

  function geometry(){const width=body.clientWidth,height=body.clientHeight;svg.setAttribute('viewBox',`0 0 ${width} ${height}`);let d;if(width<817){d=`M 23 0 L 23 ${height}`;}else{d=`M ${width*.5} 0`;rows.forEach((row,i)=>{const top=row.offsetTop,end=top+row.offsetHeight,x=width*(i%2===0?.74:.26);d+=` C ${x} ${top+row.offsetHeight*.25}, ${x} ${top+row.offsetHeight*.75}, ${width*.5} ${end}`;});}base.setAttribute('d',d);progress.setAttribute('d',d);length=base.getTotalLength();progress.style.strokeDasharray=String(length);update();}

  function update(){queued=false;const rect=body.getBoundingClientRect(),fraction=Math.max(0,Math.min(1,(innerHeight*.55-rect.top)/rect.height));const point=base.getPointAtLength(length*fraction);marker.setAttribute('transform',`translate(${point.x} ${point.y})`);progress.style.strokeDashoffset=String(length*(1-fraction));let current=0;rows.forEach((row,i)=>{const reached=point.y>=row.offsetTop+row.offsetHeight*.12;row.classList.toggle('is-reached',reached);if(reached)current=i});rows.forEach((row,i)=>row.classList.toggle('is-current',i===current));}

  window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});new ResizeObserver(()=>{geometry();decorateRoad()}).observe(body);geometry();decorateRoad();
  body.querySelectorAll('img').forEach(img=>img.addEventListener('load',decorateRoad,{once:true}));

  const markStart=()=>{let selected;try{selected=localStorage.getItem('stmarysJourneyGrade')}catch{}rows.forEach(row=>row.querySelector('.school-road-start').hidden=row.dataset.stage!==selected)};

  document.querySelector('#journey-form')?.addEventListener('submit',markStart);

})();




}

/* <script> (original line 23974) */
if (SCHOOL_PAGE === "home") {
/* Focus & Dim filter — all cards stay visible; clicking spotlights the matching card */

document.querySelectorAll('.space-filter').forEach(button=>{button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>{const grid=document.querySelector('.spaces-grid');const wasActive=button.classList.contains('is-active');document.querySelectorAll('.space-filter').forEach(b=>{b.classList.remove('is-active');b.setAttribute('aria-pressed','false');});grid.classList.remove('has-focus');document.querySelectorAll('.space-card').forEach(card=>card.classList.remove('is-focused'));if(!wasActive){button.classList.add('is-active');button.setAttribute('aria-pressed','true');const key=button.dataset.interest;const focused=grid.querySelector(`.space-card[data-tags~="${key}"]`);if(focused){grid.classList.add('has-focus');focused.classList.add('is-focused');}}});});document.querySelectorAll('[data-login-close]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#demo-login').hidden=true;document.body.classList.remove('login-open')}));document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.querySelector('#demo-login').hidden=true;document.body.classList.remove('login-open')}});document.querySelector('.demo-login-submit')?.addEventListener('click',event=>{event.preventDefault();document.querySelector('.demo-login-note').textContent='Demo preview only. No account is connected.'});
}

/* <script> (original line 23976) */
if (SCHOOL_PAGE === "home") {


// Add CSS for the explore button

(function(){

  var s = document.createElement('style');

  s.textContent = '.school-road-explore{margin-top:14px;padding:8px 20px;background:var(--color-primary);color:#fff;border:none;border-radius:20px;font-size:0.9rem;font-weight:600;cursor:pointer;transition:background .2s;}.school-road-explore:hover{background:var(--color-primary-dark);}';

  document.head.appendChild(s);

})();



// Handle explore button clicks on school-road cards

document.addEventListener('click', function(e) {

  if (!e.target.classList.contains('school-road-explore')) return;

  var stage = e.target.getAttribute('data-stage');

  if (stage === 'Pre-Primary') { window.location.href = 'pre-primary.html'; return; }

  if (stage === 'Primary') { window.location.href = 'primary.html'; return; }

  if (stage === 'Middle') { window.location.href = 'middle.html'; return; }

  if (stage === 'High') { window.location.href = 'high.html'; return; }

  // Select the matching grade button in the journey form

  var gradeBtn = document.querySelector('[data-grade="' + stage + '"]');

  if (gradeBtn) gradeBtn.click();

  // Submit the journey form

  var form = document.getElementById('journey-form');

  if (form) form.dispatchEvent(new Event('submit', {bubbles: true, cancelable: true}));

  // Scroll to the result

  setTimeout(function() {

    var result = document.getElementById('journey-result');

    if (result && !result.hidden) {

      result.scrollIntoView({behavior: 'smooth', block: 'start'});

    }

  }, 150);

});


}

/* <script> (original line 24072) */
if (SCHOOL_PAGE === "home") {


(() => {

  const spacesSection=document.getElementById('spaces');

  if(spacesSection&&!document.getElementById('events-section')){

    const eventsSection=document.createElement('section');

    eventsSection.className='events-section';eventsSection.id='events-section';

    eventsSection.innerHTML=`<div class="events-shell"><h2 class="events-main-title">Pre-Primary calendar.</h2><p class="events-intro">Official dated events from the Pre-Primary monthly planner.</p><div class="events-section-switch" role="group" aria-label="Choose school section"><button class="event-section-choice is-active" data-event-section="preprimary" type="button">Pre-Primary</button><button class="event-section-choice" data-event-section="primary" type="button">Primary</button><button class="event-section-choice" data-event-section="secondary" type="button">Secondary</button></div><div class="events-layout"><aside class="events-calendar" aria-label="Pre-Primary calendar"><div class="events-calendar-header"><button class="events-month-arrow" type="button" aria-label="Previous month">‹</button><span></span><button class="events-month-arrow" type="button" aria-label="Next month">›</button></div><div class="events-weekdays"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div><div class="events-days"></div></aside><div class="events-list"><div class="events-controls" role="group" aria-label="Filter events"><button class="event-filter is-active" data-event-filter="all" type="button">All</button><button class="event-filter" data-event-filter="academics" type="button">Academics</button><button class="event-filter" data-event-filter="holiday" type="button">Holidays</button><button class="event-filter" data-event-filter="special" type="button">Special days</button><button class="event-filter" data-event-filter="activity" type="button">Activities</button></div><h3 class="events-list-title">Events this month</h3><div class="events-list-items"></div><p class="events-note">Dates in this calendar are tentative and may be revised if necessary.</p></div></div></div>`;

    const founderSection=document.getElementById('founder');

    (founderSection||spacesSection).insertAdjacentElement('afterend',eventsSection);

    // Every dated 2027 Pre-Primary planner item. The PDF leaves Pre-Board I/II,
    // Geography Awareness Week and Annual Day without dates, so those cannot be marked.
    const prePrimaryEvents=[
      ['2027-01-04','Reopening','academics'],['2027-01-15','Makar Sankranti','holiday'],['2027-01-26','Republic Day','holiday'],['2027-02-08','Term III Examination','academics','2027-02-12'],['2027-02-15','Term III Examination','academics','2027-02-20'],
      ['2027-03-04','Holi','holiday'],['2027-03-19','Gudi Padwa','holiday'],['2027-03-21','Id-ul-Fitr','holiday'],['2027-03-21','World Poetry Day','special'],['2027-03-23','Reopening (LKG - X)','academics'],['2027-03-23','Shaheed Diwas','special'],['2027-03-26','Ram Navami','holiday'],['2027-03-27','World Theatre Day','special'],['2027-03-30','First Day (Nursery)','academics'],['2027-03-31','Mahavir Jayanti','holiday'],
      ['2027-04-02','Holy Thursday','holiday'],['2027-04-03','Good Friday','holiday'],['2027-04-05','Easter Sunday','holiday'],['2027-04-07','World Health Day','special'],['2027-04-14','Dr. Ambedkar Jayanti','holiday'],['2027-04-22','Earth Day','special'],['2027-04-23','English Language Day','special'],['2027-04-29','International Dance Day','special'],
      ['2027-05-01','Maharashtra Day','holiday'],['2027-05-02','Academic Break (Nursery - VIII)','holiday','2027-05-09'],['2027-05-27','Bakrid','holiday'],
      ['2027-06-03','World Bicycle Day','special'],['2027-06-05','Environment Day','special'],['2027-06-08','Reopening (Nursery - X)','academics'],['2027-06-21','International Yoga Day','special'],['2027-06-21','World Music Day','special'],['2027-06-26','Muharram','holiday'],
      ['2027-07-01','National Doctor\'s Day','special'],['2027-07-21','Guru Purnima','special'],['2027-07-27','Term I Examination','academics','2027-07-31'],
      ['2027-08-01','Term I Examination','academics'],['2027-08-03','Term I Examination','academics','2027-08-07'],['2027-08-12','International Youth Day','special'],['2027-08-15','Independence Day','holiday'],['2027-08-26','Id-e-Milad','holiday'],['2027-08-28','Raksha Bandhan','special'],['2027-08-29','National Sports Day','special'],
      ['2027-09-04','Janmashtami','holiday'],['2027-09-05','Teachers\' Day','special'],['2027-09-08','International Literacy Day','special'],['2027-09-14','Ganesh Chaturthi','holiday'],['2027-09-14','Hindi Diwas','special'],['2027-09-21','International Peace Day','special'],['2027-09-28','Patron\'s Day Floral Tribute','special'],
      ['2027-10-02','Gandhi Jayanti','holiday'],['2027-10-10','World Mental Health Day','special'],['2027-10-19','Dussehra','holiday'],['2027-10-19','Term II Examination','academics','2027-10-24'],['2027-10-24','United Nations Day','special'],['2027-10-26','Term II Examination','academics','2027-10-31'],
      ['2027-11-02','Term II Examination','academics','2027-11-04'],['2027-11-06','Diwali Holidays Begin','holiday'],['2027-11-08','Diwali','holiday'],['2027-11-16','Reopening','academics'],['2027-11-20','Children\'s Day Celebration','special'],['2027-11-24','Guru Nanak\'s Jayanti','holiday'],['2027-11-26','Constitution Day of India','special'],
      ['2027-12-10','Human Rights Day','special'],['2027-12-22','National Mathematics Day','special'],['2027-12-23','Christmas Holidays Begin','holiday'],['2027-12-25','Christmas','holiday']
    ].map(([date,title,type,end])=>({date,title,type,end:end||date}));
    const primaryEvents=[
      ['2027-01-01','Hindi Funny Act','activity','2027-01-02'],['2027-01-01','English Poetry','activity','2027-01-02'],['2027-01-03','Shape Safari','activity','2027-01-05'],['2027-01-03','Radio Jockey','activity','2027-01-05'],['2027-01-04','Reopening','academics'],['2027-01-04','Fraction Fun','activity'],['2027-01-15','Makar Sankranti','holiday'],['2027-01-26','Republic Day','holiday'],
      ['2027-02-08','Term III Examination','academics','2027-02-12'],['2027-02-15','Term III Examination','academics','2027-02-20'],
      ['2027-03-04','Holi','holiday'],['2027-03-19','Gudi Padwa','holiday'],['2027-03-21','Id-ul-Fitr','holiday'],['2027-03-21','World Poetry Day','special'],['2027-03-23','Reopening (LKG - X)','academics'],['2027-03-23','Shaheed Diwas','special'],['2027-03-26','Ram Navami','holiday'],['2027-03-27','World Theatre Day','special'],['2027-03-30','First Day (Nursery)','academics'],['2027-03-31','Mahavir Jayanti','holiday'],
      ['2027-04-02','Holy Thursday','holiday'],['2027-04-03','Good Friday','holiday'],['2027-04-04','School Holiday','holiday'],['2027-04-05','Easter Sunday','holiday'],['2027-04-07','World Health Day','special'],['2027-04-14','Dr. Ambedkar Jayanti','holiday'],['2027-04-22','Earth Day','special'],['2027-04-23','English Language Day','special'],['2027-04-29','International Dance Day','special'],
      ['2027-05-01','Maharashtra Day','holiday'],['2027-05-02','Academic Break (Nursery - VIII)','holiday','2027-05-09'],['2027-05-27','Bakrid','holiday'],
      ['2027-06-03','World Bicycle Day','special'],['2027-06-05','Environment Day','special'],['2027-06-08','Reopening (Nursery - X)','academics'],['2027-06-18','Music Competition','activity'],['2027-06-21','International Yoga Day','special'],['2027-06-21','World Music Day','special'],['2027-06-22','Yoga Day','activity'],['2027-06-26','Muharram','holiday'],
      ['2027-07-01','National Doctor\'s Day','special'],['2027-07-01','English Storytelling','activity','2027-07-02'],['2027-07-03','Poster Making','activity','2027-07-04'],['2027-07-21','Guru Purnima','special'],['2027-07-27','Term I Examination','academics','2027-07-31'],
      ['2027-08-01','Term I Examination','academics'],['2027-08-03','Term I Examination','academics','2027-08-07'],['2027-08-03','Science Explorer','activity','2027-08-05'],['2027-08-03','Legacy of the Past','activity','2027-08-05'],['2027-08-04','Street Play','activity'],['2027-08-05','Math Blast','activity'],['2027-08-12','International Youth Day','special'],['2027-08-15','Independence Day','holiday'],['2027-08-26','Id-e-Milad','holiday'],['2027-08-28','Raksha Bandhan','special'],['2027-08-29','National Sports Day','special'],
      ['2027-09-01','One Act Plays','activity','2027-09-05'],['2027-09-01','Food Decoration','activity','2027-09-02'],['2027-09-03','Math Scavenger Hunt','activity'],['2027-09-03','Flower Rangoli','activity'],['2027-09-04','Janmashtami','holiday'],['2027-09-04','Hindi News Room','activity'],['2027-09-04','English Dialogue Circle','activity'],['2027-09-05','Teachers\' Day','special'],['2027-09-05','Harvest Activity','activity'],['2027-09-05','English Debate','activity'],['2027-09-08','International Literacy Day','special'],['2027-09-14','Ganesh Chaturthi','holiday'],['2027-09-14','Hindi Diwas','special'],['2027-09-21','International Peace Day','special'],['2027-09-28','Patron\'s Day Floral Tribute','special'],
      ['2027-10-01','Best out of Waste','activity','2027-10-02'],['2027-10-01','Marathi Speaking Skill','activity','2027-10-02'],['2027-10-02','Gandhi Jayanti','holiday'],['2027-10-03','Junior Chef Fiesta','activity'],['2027-10-03','Science Quiz','activity','2027-10-05'],['2027-10-04','Mini Museum','activity'],['2027-10-05','Wings of Change','activity'],['2027-10-05','Hindi Elocution','activity'],['2027-10-10','World Mental Health Day','special'],['2027-10-19','Dussehra','holiday'],['2027-10-19','Term II Examination','academics','2027-10-24'],['2027-10-24','United Nations Day','special'],['2027-10-26','Term II Examination','academics','2027-10-31'],
      ['2027-11-02','Term II Examination','academics','2027-11-04'],['2027-11-05','Diwali Celebration & Traditional Day','activity'],['2027-11-06','Diwali Holidays Begin','holiday'],['2027-11-08','Diwali','holiday'],['2027-11-16','Reopening','academics'],['2027-11-21','Children\'s Day Celebration','activity'],['2027-11-24','Guru Nanak\'s Jayanti','holiday'],['2027-11-26','Constitution Day of India','special'],
      ['2027-12-10','Human Rights Day','special'],['2027-12-22','National Mathematics Day','special'],['2027-12-23','Christmas Holidays Begin','holiday'],['2027-12-25','Christmas','holiday']
    ].map(([date,title,type,end])=>({date,title,type,end:end||date}));
    const secondaryEvents=[
      ['2027-01-04','Reopening','academics'],['2027-01-15','Makar Sankranti','holiday'],['2027-01-26','Republic Day','holiday'],
      ['2027-02-08','Term III Examination','academics','2027-02-12'],['2027-02-15','Term III Examination','academics','2027-02-20'],
      ['2027-03-04','Holi','holiday'],['2027-03-19','Gudi Padwa','holiday'],['2027-03-21','Id-ul-Fitr','holiday'],['2027-03-21','World Poetry Day','special'],['2027-03-23','Reopening (LKG - X)','academics'],['2027-03-23','Shaheed Diwas','special'],['2027-03-26','Ram Navami','holiday'],['2027-03-27','Divine Service','activity'],['2027-03-27','World Theatre Day','special'],['2027-03-30','First Day (Nursery)','academics'],['2027-03-31','Mahavir Jayanti','holiday'],
      ['2027-04-02','Holy Thursday','holiday'],['2027-04-03','Good Friday','holiday'],['2027-04-05','Easter Sunday','holiday'],['2027-04-07','World Health Day','special'],['2027-04-14','Dr. Ambedkar Jayanti','holiday'],['2027-04-22','Earth Day','special'],['2027-04-23','English Language Day','special'],['2027-04-29','International Dance Day','special'],
      ['2027-05-01','Maharashtra Day','holiday'],['2027-05-02','Academic Break (Nursery - VIII)','holiday','2027-05-09'],['2027-05-27','Bakrid','holiday'],
      ['2027-06-03','World Bicycle Day','special'],['2027-06-05','Environment Day','special'],['2027-06-08','Reopening (Nursery - X)','academics'],['2027-06-12','Environment Day Activity','activity'],['2027-06-17','Bicycle Rally','activity'],['2027-06-19','Music Competition','activity'],['2027-06-21','International Yoga Day','special'],['2027-06-21','World Music Day','special'],['2027-06-22','Yoga Day','activity'],['2027-06-26','Muharram','holiday'],
      ['2027-07-01','National Doctor\'s Day','special'],['2027-07-21','Guru Purnima','special'],['2027-07-27','Term I Examination','academics','2027-07-31'],
      ['2027-08-01','Term I Examination','academics'],['2027-08-03','Term I Examination','academics','2027-08-07'],['2027-08-12','International Youth Day','special'],['2027-08-15','Independence Day','holiday'],['2027-08-26','Id-e-Milad','holiday'],['2027-08-28','Raksha Bandhan','special'],['2027-08-29','National Sports Day','special'],
      ['2027-09-04','Janmashtami','holiday'],['2027-09-05','Teachers\' Day','special'],['2027-09-08','International Literacy Day','special'],['2027-09-10','Idol Making','activity'],['2027-09-14','Ganesh Chaturthi','holiday'],['2027-09-14','Hindi Diwas','special'],['2027-09-21','International Peace Day','special'],['2027-09-28','Patron\'s Day Floral Tribute','special'],
      ['2027-10-02','Gandhi Jayanti','holiday'],['2027-10-10','World Mental Health Day','special'],['2027-10-19','Dussehra','holiday'],['2027-10-19','Term II Examination','academics','2027-10-24'],['2027-10-24','United Nations Day','special'],['2027-10-26','Term II Examination','academics','2027-10-31'],
      ['2027-11-02','Term II Examination','academics','2027-11-04'],['2027-11-06','Diwali Holidays Begin','holiday'],['2027-11-08','Diwali','holiday'],['2027-11-16','Reopening','academics'],['2027-11-17','Children\'s Day Celebration','activity'],['2027-11-24','Guru Nanak\'s Jayanti','holiday'],['2027-11-26','Constitution Day of India','special'],
      ['2027-12-10','Human Rights Day','special'],['2027-12-22','National Mathematics Day','special'],['2027-12-23','Christmas Holidays Begin','holiday'],['2027-12-25','Christmas','holiday']
    ].map(([date,title,type,end])=>({date,title,type,end:end||date}));
    let events=prePrimaryEvents;
    const calendar=eventsSection.querySelector('.events-calendar'),calendarTitle=calendar.querySelector('.events-calendar-header span'),calendarDays=calendar.querySelector('.events-days'),monthButtons=calendar.querySelectorAll('.events-month-arrow'),listTitle=eventsSection.querySelector('.events-list-title'),listItems=eventsSection.querySelector('.events-list-items'),mainTitle=eventsSection.querySelector('.events-main-title'),intro=eventsSection.querySelector('.events-intro');
    // Calendar opens with the 2027 Pre-Primary schedule, beginning in January.
    let activeSection='preprimary',activeEventFilter='all',calendarMonth=0,calendarYear=2027,selectedEventDate=null;
    const keyForDate=(year,month,day)=>`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const occursOn=(item,date)=>date>=item.date&&date<=item.end;
    const inVisibleMonth=item=>{const monthStart=keyForDate(calendarYear,calendarMonth,1),monthEnd=keyForDate(calendarYear,calendarMonth+1,0);return item.date<=monthEnd&&item.end>=monthStart;};
    const formatDate=date=>new Intl.DateTimeFormat('en',{month:'short',day:'numeric'}).format(new Date(`${date}T00:00:00`));
    const sectionLabel=section=>({preprimary:'Pre-Primary',primary:'Primary',secondary:'Secondary'})[section]||'Pre-Primary';
    const renderEvents=()=>{let visible=events.filter(item=>selectedEventDate?occursOn(item,selectedEventDate):inVisibleMonth(item));if(activeEventFilter!=='all')visible=visible.filter(item=>item.type===activeEventFilter);visible.sort((a,b)=>a.date.localeCompare(b.date));listTitle.textContent=selectedEventDate?`Events on ${formatDate(selectedEventDate)}`:`Events in ${new Intl.DateTimeFormat('en',{month:'long'}).format(new Date(calendarYear,calendarMonth))}`;listItems.innerHTML=visible.length?visible.map(item=>{const date=new Date(`${item.date}T00:00:00`),month=new Intl.DateTimeFormat('en',{month:'short'}).format(date).toUpperCase(),end=item.end!==item.date?` - ${formatDate(item.end)}`:'',typeLabel=item.type==='academics'?'Academics':item.type==='holiday'?'Holiday':item.type==='activity'?'Activity':'Special day';return `<article class="event-row" data-event-type="${item.type}"><div class="event-date"><small>${month}</small><strong>${date.getDate()}</strong></div><div><h4 class="event-title">${item.title}</h4><p class="event-meta">${typeLabel}${end}</p></div></article>`;}).join(''):`<p class="events-empty">No matching ${sectionLabel(activeSection)} events are scheduled for this selection.</p>`;};
    const renderCalendar=()=>{const firstDay=new Date(calendarYear,calendarMonth,1).getDay(),daysInMonth=new Date(calendarYear,calendarMonth+1,0).getDate(),monthName=new Intl.DateTimeFormat('en',{month:'long'}).format(new Date(calendarYear,calendarMonth));calendarTitle.textContent=`${monthName} ${calendarYear}`;calendar.setAttribute('aria-label',`${monthName} ${calendarYear} calendar`);calendarDays.innerHTML='';for(let i=0;i<firstDay;i++)calendarDays.insertAdjacentHTML('beforeend','<span aria-hidden="true"></span>');for(let day=1;day<=daysInMonth;day++){const dateKey=keyForDate(calendarYear,calendarMonth,day),hasEvent=events.some(item=>occursOn(item,dateKey)),selected=dateKey===selectedEventDate;calendarDays.insertAdjacentHTML('beforeend',`<button type="button" class="calendar-date${hasEvent?' event-day':''}${selected?' is-selected':''}" data-date="${dateKey}" aria-label="Select ${monthName} ${day}, ${calendarYear}">${day}</button>`);}renderEvents();};
    eventsSection.querySelectorAll('.event-section-choice').forEach(button=>button.addEventListener('click',()=>{activeSection=button.dataset.eventSection;events=activeSection==='primary'?primaryEvents:activeSection==='secondary'?secondaryEvents:prePrimaryEvents;const label=sectionLabel(activeSection);mainTitle.textContent=`${label} calendar.`;intro.textContent=`Official dated events from the ${label} monthly planner.`;calendar.setAttribute('aria-label',`${label} calendar`);selectedEventDate=null;activeEventFilter='all';eventsSection.querySelectorAll('.event-section-choice').forEach(item=>item.classList.toggle('is-active',item===button));eventsSection.querySelectorAll('.event-filter').forEach(item=>item.classList.toggle('is-active',item.dataset.eventFilter==='all'));renderCalendar();}));
    eventsSection.querySelectorAll('.event-filter').forEach(button=>button.addEventListener('click',()=>{activeEventFilter=button.dataset.eventFilter;eventsSection.querySelectorAll('.event-filter').forEach(item=>item.classList.toggle('is-active',item===button));renderEvents();}));

    monthButtons[0].addEventListener('click',()=>{calendarMonth--;if(calendarMonth<0){calendarMonth=11;calendarYear--;}selectedEventDate=null;renderCalendar();});

    monthButtons[1].addEventListener('click',()=>{calendarMonth++;if(calendarMonth>11){calendarMonth=0;calendarYear++;}selectedEventDate=null;renderCalendar();});

    calendarDays.addEventListener('click',event=>{const dateButton=event.target.closest('.calendar-date');if(!dateButton)return;selectedEventDate=dateButton.dataset.date;renderCalendar();});

    renderCalendar();

  }

  if(!document.getElementById('desktop-nav-action-compact')){const compactNavStyle=document.createElement('style');compactNavStyle.id='desktop-nav-action-compact';compactNavStyle.textContent='@media(min-width:1201px){.nav-container.sticky .nav-actions{justify-self:end!important;gap:8px!important;padding:0 8px!important;transform:none!important}.nav-container.sticky .lang-switcher-btn{min-width:95px!important;height:auto!important;padding:8px 16px!important;font-size:.85rem!important}.nav-container.sticky .alumni-btn{min-width:0!important;height:auto!important;padding:10px 20px!important;font-size:15px!important}}';document.head.append(compactNavStyle);}

})();


}

/* <script> (original line 25034) */
if (SCHOOL_PAGE === "spg-spaces") {

(function () {
  /*
    SPACES PAGE PHOTOS — EDIT IMAGE PATHS HERE.
    For each space, change `photo` for the large feature image and edit `thumbs`
    for its small gallery images. Keep all image files in the images/ folder.
  */
  var SPACES = [
    {
      key: 'science',
      name: 'Science Lab',
      cat: 'Physics · Chemistry · Biology',
      desc: 'Physics, Chemistry and Biology labs equipped for practical work. Students across the school use these labs for hands-on experiments and to build a foundation in the natural sciences.',
      features: [
        'Separate labs for Physics, Chemistry and Biology',
        'Practical work for all science subjects',
        'Available to students from the primary stage onwards'
      ],
      // Science Lab: main image and gallery thumbnails
      photo: 'images/sc1.jpg',
      thumbs: ['images/sc1.jpg', 'images/sc2.jpg']
    },
    {
      key: 'computers',
      name: 'Computer Lab',
      cat: 'Technology · Digital learning',
      desc: 'Computer studies are part of the curriculum from Std I. The labs give every student access to computers for academic and skill-building work throughout the school year.',
      features: [
        'Computer studies from Std I',
        'Available to all year groups',
        'Supports both academic and practical ICT skills'
      ],
      // Computer Lab: main image and gallery thumbnails
      photo: 'images/cl1.jpg',
      thumbs: ['images/cl1.jpg', 'images/cl2.jpg']
    },
    {
      key: 'library',
      name: 'Library',
      cat: 'Reading · Research · Exploration',
      desc: 'A well-equipped library on the first floor, open for reading, research and exploration. Students are encouraged to use the library regularly to build reading habits and support their studies.',
      features: [
        'Located on the first floor',
        'Wide range of books and reference materials',
        'Open for reading, learning and exploration'
      ],
      // Library: main image and gallery thumbnails
      photo: 'images/lb1.jpg',
      thumbs: ['images/lb1.jpg','images/lb2.jpg']
    },
    {
      key: 'arts',
      name: 'Stage and Arts',
      cat: 'Art · Singing · Performances',
      desc: 'Art and music are integral to school life. Students participate in art classes, singing, and are part of the school\'s annual performances and cultural programmes held on stage.',
      features: [
        'Art and craft as part of the curriculum',
        'Singing and music activities',
        'Annual Day and cultural stage performances'
      ],
      // Stage and Arts: main image and gallery thumbnails
      photo: 'images/sa2.jpg',
      thumbs: ['images/sa1.jpg','images/sa2.jpg']
    },
    {
      key: 'sports',
      name: 'Games and Sports',
      cat: 'Football · Basketball · Badminton · and more',
      desc: 'Sports are an integral part of school life. Students play and train in football, basketball, roll ball, badminton, table tennis and skating. The school participates in inter-school, district, zonal, regional and national competitions.',
      features: [
        'Football, basketball, roll ball, badminton, table tennis and skating',
        'Inter-school, district, zonal and national competitions',
        'Training on the two-acre playground',
        'First aid available; students trained by qualified coaches'
      ],
      // Games and Sports: main image and gallery thumbnails
      photo: 'images/sp1.jpg',
      thumbs: ['images/sp1.jpg','images/sp2.jpg','images/sp3.jpg']
    },
    {
      key: 'karate',
      name: 'Karate',
      cat: 'Discipline · Fitness · Competition',
      desc: 'Karate is part of the curriculum from Std I, making it a core part of every student\'s school life. Students have won gold and silver medals at CISCE Zonal Karate Championships.',
      features: [
        'Part of the curriculum from Std I',
        'Gold medals at CISCE Zonal Karate Championship',
        'Silver medals at CISCE Zonal Karate Championship'
      ],
      // Karate: main image and gallery thumbnails
      photo: 'images/k2.jpg',
      thumbs: ['images/k1.jpg','images/k2.jpg']
    },
    {
      key: 'campus',
      name: 'Seven-Acre Campus',
      cat: 'Green campus · Orchards · Playground',
      desc: 'The school is spread across seven acres with orchards, flower gardens and a two-acre playground. The open, green campus gives students space to move, play and connect with nature alongside their studies.',
      features: [
        'Seven-Acre Campus in Dhanori, Pune',
        'Orchards and flower gardens',
        'Two-acre playground'
      ],
      // Seven-Acre Campus: main image and gallery thumbnails
      photo: 'images/gc2.jpg',
      thumbs: ['images/127.jpeg', 'images/gc2.jpg']
    }
  ];

  var section    = document.getElementById('spg-spaces');
  var switcher   = document.getElementById('spaces-switcher');
  var mainImg    = document.getElementById('spaces-main-img');
  var mainWrap   = document.getElementById('spaces-main-wrap');
  var thumbsEl   = document.getElementById('spaces-thumbs');
  var nameEl     = document.getElementById('spaces-name');
  var catEl      = document.getElementById('spaces-cat');
  var descEl     = document.getElementById('spaces-desc');
  var featEl     = document.getElementById('spaces-features');
  var exploreEl  = document.getElementById('spaces-explore-strip');
  var lightbox   = document.getElementById('spaces-lightbox');
  var lbImg      = document.getElementById('spaces-lb-img');
  var lbClose    = document.getElementById('spaces-lb-close');
  var zoomBtn    = document.getElementById('spaces-zoom-btn');

  var current    = SPACES[0];

  function spaceByKey(key) {
    for (var i = 0; i < SPACES.length; i++) {
      if (SPACES[i].key === key) return SPACES[i];
    }
    return null;
  }

  function renderPanel(sp) {
    current = sp;
    mainImg.src = sp.photo;
    mainImg.alt = sp.name;
    nameEl.textContent = sp.name;
    catEl.textContent = sp.cat;
    descEl.textContent = sp.desc;
    featEl.innerHTML = sp.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('');
    renderThumbs(sp);
    updateExplore();
  }

  function renderThumbs(sp) {
    thumbsEl.innerHTML = '';
    sp.thumbs.forEach(function (src, i) {
      var img = document.createElement('img');
      img.className = 'spaces-thumb' + (i === 0 ? ' is-active' : '');
      img.src = src;
      img.alt = sp.name;
      img.addEventListener('click', function () {
        mainImg.src = src;
        thumbsEl.querySelectorAll('.spaces-thumb').forEach(function (t) { t.classList.remove('is-active'); });
        img.classList.add('is-active');
      });
      thumbsEl.appendChild(img);
    });
  }

  function renderExplore() {
    exploreEl.innerHTML = '';
    SPACES.forEach(function (sp) {
      var item = document.createElement('div');
      item.className = 'spaces-explore-item' + (sp.key === current.key ? ' is-current' : '');
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', sp.name);
      item.dataset.spaceKey = sp.key;
      var img = document.createElement('img');
      img.className = 'spaces-explore-img';
      img.src = sp.photo;
      img.alt = sp.name;
      var label = document.createElement('span');
      label.className = 'spaces-explore-name';
      label.textContent = sp.name;
      item.appendChild(img);
      item.appendChild(label);
      item.addEventListener('click', function () { selectSpace(sp.key); });
      item.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectSpace(sp.key); } });
      exploreEl.appendChild(item);
    });
  }

  function updateExplore() {
    var items = exploreEl.querySelectorAll('.spaces-explore-item');
    items.forEach(function (item) {
      item.classList.toggle('is-current', item.dataset.spaceKey === current.key);
    });
  }

  function updatePills() {
    switcher.querySelectorAll('.spaces-pill').forEach(function (btn) {
      var active = btn.dataset.spaceKey === current.key;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });
  }

  function selectSpace(key) {
    var sp = spaceByKey(key);
    if (!sp) return;
    renderPanel(sp);
    updatePills();
    updateExplore();
    try { sessionStorage.setItem('dmts_space', key); } catch (e) {}
  }

  function openLightbox() {
    lbImg.src = mainImg.src;
    lbImg.alt = mainImg.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* pill clicks */
  switcher.addEventListener('click', function (e) {
    var btn = e.target.closest('.spaces-pill');
    if (!btn) return;
    selectSpace(btn.dataset.spaceKey);
  });

  /* zoom / lightbox */
  mainWrap.addEventListener('click', function (e) {
    if (e.target === zoomBtn || e.target.closest('.spaces-zoom-btn')) return;
    openLightbox();
  });
  zoomBtn.addEventListener('click', openLightbox);
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  /* activate on hash change — read sessionStorage for the target space */
  function onShow() {
    var key = '';
    try { key = sessionStorage.getItem('dmts_space') || ''; } catch (e) {}
    var sp = spaceByKey(key) || SPACES[0];
    renderPanel(sp);
    renderExplore();
    updatePills();
  }

  /* watch for the section becoming visible */
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.type === 'attributes' && m.attributeName === 'hidden') {
        if (!section.hidden) onShow();
      }
    });
  });
  observer.observe(section, { attributes: true });

  /* also run once if already visible at page load */
  if (!section.hidden) onShow();
  else {
    /* initial render so pills/explore exist before first visit */
    renderPanel(SPACES[0]);
    renderExplore();
  }
}());

}

/* <script> (original line 26812) */
if (SCHOOL_PAGE === "spg-conduct") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-conduct .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



  /* ── Expand all / Collapse all ── */

  var expandBtn = document.getElementById('coc-expand-all');

  var collapseBtn = document.getElementById('coc-collapse-all');

  if (expandBtn) {

    expandBtn.addEventListener('click', function() {

      document.querySelectorAll('#spg-conduct details.coc-details').forEach(function(d) { d.open = true; });

    });

  }

  if (collapseBtn) {

    collapseBtn.addEventListener('click', function() {

      document.querySelectorAll('#spg-conduct details.coc-details').forEach(function(d) { d.open = false; });

    });

  }



})();


}

/* <script> (original line 27294) */
if (SCHOOL_PAGE === "spg-discipline") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-discipline .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



  /* ── Expand all / Collapse all ── */

  var expandBtn = document.getElementById('disc-expand-all');

  var collapseBtn = document.getElementById('disc-collapse-all');

  if (expandBtn) {

    expandBtn.addEventListener('click', function() {

      document.querySelectorAll('#spg-discipline details.coc-details').forEach(function(d) { d.open = true; });

    });

  }

  if (collapseBtn) {

    collapseBtn.addEventListener('click', function() {

      document.querySelectorAll('#spg-discipline details.coc-details').forEach(function(d) { d.open = false; });

    });

  }



})();


}

/* <script> (original line 27946) */
if (SCHOOL_PAGE === "spg-timings") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-timings .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 28746) */
if (SCHOOL_PAGE === "spg-curriculum") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-curriculum .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 29384) */
if (SCHOOL_PAGE === "spg-subjects") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-subjects .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 30078) */
if (SCHOOL_PAGE === "spg-exams") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-exams .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 30748) */
if (SCHOOL_PAGE === "spg-scholastics") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-scholastics .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 31248) */
if (SCHOOL_PAGE === "spg-coscholastics") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-coscholastics .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 31904) */
if (SCHOOL_PAGE === "spg-achievements") {


(function(){

  'use strict';



  /* ── Fade-in on scroll only — no counting animation per design spec ── */

  var fadeItems = document.querySelectorAll('#spg-achievements .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 33500) */
if (SCHOOL_PAGE === "spg-admissions") {


(function(){

  'use strict';



  /* ── Fade-in on scroll — scoped to #spg-admissions ── */

  var fadeItems = document.querySelectorAll('#spg-admissions .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script id="magazine-reader-script"> (original line 34887) */
if (SCHOOL_PAGE === "spg-magazine") {

(function () {
  "use strict";

  /*
   * ADD MORE MAGAZINES HERE:
   * 1. Copy the PDF and a cover image into the existing images/ folder.
   * 2. Duplicate one object below and update title, issue, description, pdf, cover and pages.
   * 3. For offline file:// page flipping, export pages as prefix-01.jpg, prefix-02.jpg, etc.
   *    Then set pageImagePrefix to "images/prefix-". If omitted, the hosted site uses PDF.js.
   * The selection card and live reader menu are generated automatically.
   */
  var MAGAZINES = [
    {
      title: "Theophilian Trailblazer",
      issue: "Edition 06 - October 2026",
      description: "Rising with renewed energy - stories, reflections and achievements from our senior school community.",
      pdf: "images/theophilian-trailblazer-october-2026.pdf",
      cover: "images/theophilian-trailblazer-cover.jpg",
      pageImagePrefix: "images/theophilian-trailblazer-page-",
      pages: 28
    },
    {
      title: "Junior Trailblazers",
      issue: "Issue 13 - October 2026",
      description: "A vibrant collection of celebrations, classroom experiences and creative work from our junior learners.",
      pdf: "images/junior-trailblazers-october-2026.pdf",
      cover: "images/junior-trailblazers-cover.jpg",
      pageImagePrefix: "images/junior-trailblazers-page-",
      pages: 62
    }
  ];

  var root = document.getElementById("spg-magazine");
  if (!root) return;

  var grid = root.querySelector("#magazineEditionGrid");
  var select = root.querySelector("#magazineSelect");
  var stage = root.querySelector("#magBookStage");
  var reader = root.querySelector("#magazineReader");
  var title = root.querySelector("#mag-reader-title");
  var status = root.querySelector("#magReaderStatus");
  var welcome = root.querySelector("#magReaderWelcome");
  var firstBtn = root.querySelector("#magFirstPage");
  var prevBtn = root.querySelector("#magPrevPage");
  var nextBtn = root.querySelector("#magNextPage");
  var lastBtn = root.querySelector("#magLastPage");
  var zoomOutBtn = root.querySelector("#magZoomOut");
  var zoomInBtn = root.querySelector("#magZoomIn");
  var fullscreenBtn = root.querySelector("#magFullscreen");
  var pageInput = root.querySelector("#magPageInput");
  var pageTotal = root.querySelector("#magPageTotal");
  var pdfDoc = null;
  var activeIndex = -1;
  var currentPage = 1;
  var zoom = 1;
  var renderTicket = 0;
  var pdfJsPromise = null;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[character];
    });
  }

  function buildLibrary() {
    grid.innerHTML = MAGAZINES.map(function (magazine, index) {
      return '<article class="mag-card">' +
        '<div class="mag-cover"><img src="' + escapeHtml(magazine.cover) + '" alt="Cover of ' + escapeHtml(magazine.title) + '" loading="lazy"></div>' +
        '<div class="mag-card-copy">' +
          '<div class="mag-issue">' + escapeHtml(magazine.issue) + '</div>' +
          '<h3>' + escapeHtml(magazine.title) + '</h3>' +
          '<p>' + escapeHtml(magazine.description) + '</p>' +
          '<div class="mag-meta"><span><i class="far fa-file-pdf" aria-hidden="true"></i> PDF edition</span><span><i class="far fa-copy" aria-hidden="true"></i> ' + magazine.pages + ' pages</span></div>' +
          '<button type="button" class="mag-read-btn" data-magazine-index="' + index + '"><i class="fas fa-book-reader" aria-hidden="true"></i> Read magazine</button>' +
        '</div>' +
      '</article>';
    }).join("");

    select.innerHTML = '<option value="" selected disabled>Choose a magazine</option>' + MAGAZINES.map(function (magazine, index) {
      return '<option value="' + index + '">' + escapeHtml(magazine.title + " - " + magazine.issue) + '</option>';
    }).join("");
  }

  function loadPdfJs() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (pdfJsPromise) return pdfJsPromise;
    pdfJsPromise = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      script.onload = function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(window.pdfjsLib);
      };
      script.onerror = function () { reject(new Error("PDF reader library could not be loaded.")); };
      document.head.appendChild(script);
    });
    return pdfJsPromise;
  }

  function setLoading(message) {
    status.hidden = false;
    status.innerHTML = '<div><div class="mag-spinner" aria-hidden="true"></div>' + escapeHtml(message) + '</div>';
  }

  function clearLoading() {
    status.hidden = true;
    status.innerHTML = "";
  }

  function isSinglePage() {
    return window.matchMedia("(max-width: 700px)").matches;
  }

  function spreadStartFor(page) {
    if (isSinglePage() || page === 1) return page;
    return page % 2 === 0 ? page : page - 1;
  }

  function pagesFor(start) {
    if (!pdfDoc) return [];
    if (isSinglePage() || start === 1) return [start];
    return [start, start + 1].filter(function (page) { return page <= pdfDoc.numPages; });
  }

  function makeSheet(pageNumber, pageMedia) {
    var sheet = document.createElement("div");
    sheet.className = "mag-sheet";
    sheet.setAttribute("aria-label", "Page " + pageNumber);
    sheet.appendChild(pageMedia);
    var number = document.createElement("span");
    number.className = "mag-page-number";
    number.textContent = pageNumber;
    sheet.appendChild(number);
    return sheet;
  }

  function renderCanvas(pageNumber) {
    var magazine = MAGAZINES[activeIndex];
    if (magazine && magazine.pageImagePrefix) {
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.alt = "";
        image.decoding = "async";
        image.onload = function () { resolve(image); };
        image.onerror = function () { reject(new Error("Page image " + pageNumber + " could not be loaded.")); };
        image.src = magazine.pageImagePrefix + String(pageNumber).padStart(2, "0") + ".jpg";
      });
    }
    return pdfDoc.getPage(pageNumber).then(function (page) {
      var viewport = page.getViewport({ scale: 1.45 });
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d", { alpha: false });
      var pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(viewport.width * pixelRatio);
      canvas.height = Math.floor(viewport.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      return page.render({ canvasContext: context, viewport: viewport }).promise.then(function () { return canvas; });
    });
  }

  function renderSpread(targetPage, direction, instant) {
    if (!pdfDoc) return Promise.resolve();
    var ticket = ++renderTicket;
    var start = spreadStartFor(Math.max(1, Math.min(targetPage, pdfDoc.numPages)));
    var pageNumbers = pagesFor(start);
    if (!pageNumbers.length) return Promise.resolve();
    setLoading("Preparing pages...");

    return Promise.all(pageNumbers.map(renderCanvas)).then(function (canvases) {
      if (ticket !== renderTicket) return;
      var spread = document.createElement("div");
      spread.className = "mag-spread";
      spread.style.setProperty("--mag-zoom", zoom);
      canvases.forEach(function (canvas, index) { spread.appendChild(makeSheet(pageNumbers[index], canvas)); });
      var oldSpreads = Array.prototype.slice.call(stage.querySelectorAll(".mag-spread"));
      Array.prototype.forEach.call(stage.querySelectorAll(".mag-fallback"), function (node) { node.remove(); });
      stage.appendChild(spread);

      if (oldSpreads.length && !instant && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var suffix = direction === "prev" ? "prev" : "next";
        oldSpreads.forEach(function (oldSpread) { oldSpread.classList.add("turn-out-" + suffix); });
        spread.classList.add("turn-in-" + suffix);
        window.setTimeout(function () {
          oldSpreads.forEach(function (oldSpread) { if (oldSpread.parentNode) oldSpread.remove(); });
        }, 480);
      } else if (oldSpreads.length) {
        oldSpreads.forEach(function (oldSpread) { oldSpread.remove(); });
      }

      currentPage = start;
      pageInput.value = currentPage;
      updateControls();
      clearLoading();
    }).catch(function (error) {
      if (ticket !== renderTicket) return;
      showFallback(error);
    });
  }

  function showFallback(error) {
    clearLoading();
    Array.prototype.forEach.call(stage.querySelectorAll(".mag-spread, .mag-fallback"), function (node) { node.remove(); });
    var magazine = MAGAZINES[activeIndex];
    var panel = document.createElement("div");
    panel.className = "mag-fallback";
    panel.innerHTML = '<i class="far fa-file-pdf" aria-hidden="true"></i><p>The interactive page renderer is unavailable in this browser. You can still read the complete magazine in the built-in PDF viewer.</p><a href="' + escapeHtml(magazine.pdf) + '" target="_blank" rel="noopener">Open ' + escapeHtml(magazine.title) + '</a>';
    stage.appendChild(panel);
    console.warn("Magazine reader fallback:", error);
  }

  function updateControls() {
    var ready = !!pdfDoc;
    var step = isSinglePage() ? 1 : 2;
    var atStart = !ready || currentPage <= 1;
    var atEnd = !ready || currentPage + (currentPage === 1 ? 0 : step - 1) >= pdfDoc.numPages;
    [firstBtn, prevBtn].forEach(function (button) { button.disabled = atStart; });
    [nextBtn, lastBtn].forEach(function (button) { button.disabled = atEnd; });
    [zoomOutBtn, zoomInBtn, pageInput].forEach(function (control) { control.disabled = !ready; });
    zoomOutBtn.disabled = !ready || zoom <= .75;
    zoomInBtn.disabled = !ready || zoom >= 1.5;
    pageTotal.textContent = "of " + (ready ? pdfDoc.numPages : 0);
    pageInput.max = ready ? pdfDoc.numPages : 1;
  }

  function goNext() {
    if (!pdfDoc) return;
    var next = isSinglePage() ? currentPage + 1 : (currentPage === 1 ? 2 : currentPage + 2);
    if (next <= pdfDoc.numPages) renderSpread(next, "next", false);
  }

  function goPrevious() {
    if (!pdfDoc || currentPage <= 1) return;
    var previous = isSinglePage() ? currentPage - 1 : (currentPage <= 2 ? 1 : currentPage - 2);
    renderSpread(previous, "prev", false);
  }

  function changeZoom(amount) {
    zoom = Math.max(.75, Math.min(1.5, Math.round((zoom + amount) * 100) / 100));
    var spread = stage.querySelector(".mag-spread");
    if (spread) spread.style.setProperty("--mag-zoom", zoom);
    updateControls();
  }

  function selectMagazine(index, scrollToReader) {
    var magazine = MAGAZINES[index];
    if (!magazine) return;
    activeIndex = index;
    pdfDoc = null;
    currentPage = 1;
    zoom = 1;
    select.value = String(index);
    title.textContent = magazine.title + " - " + magazine.issue;
    updateControls();
    if (scrollToReader) reader.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    setLoading("Opening " + magazine.title + "...");

    if (magazine.pageImagePrefix) {
      pdfDoc = { numPages: magazine.pages };
      pageTotal.textContent = "of " + pdfDoc.numPages;
      renderSpread(1, "next", true);
    } else {
      loadPdfJs().then(function (pdfjsLib) {
        return pdfjsLib.getDocument({ url: magazine.pdf }).promise;
      }).then(function (loadedPdf) {
        if (activeIndex !== index) return;
        pdfDoc = loadedPdf;
        pageTotal.textContent = "of " + pdfDoc.numPages;
        return renderSpread(1, "next", true);
      }).catch(showFallback);
    }
  }

  grid.addEventListener("click", function (event) {
    var button = event.target.closest("[data-magazine-index]");
    if (button) selectMagazine(Number(button.getAttribute("data-magazine-index")), true);
  });
  select.addEventListener("change", function () { selectMagazine(Number(select.value), false); });
  firstBtn.addEventListener("click", function () { renderSpread(1, "prev", false); });
  prevBtn.addEventListener("click", goPrevious);
  nextBtn.addEventListener("click", goNext);
  lastBtn.addEventListener("click", function () { renderSpread(pdfDoc ? pdfDoc.numPages : 1, "next", false); });
  zoomOutBtn.addEventListener("click", function () { changeZoom(-.15); });
  zoomInBtn.addEventListener("click", function () { changeZoom(.15); });
  pageInput.addEventListener("change", function () {
    if (!pdfDoc) return;
    var requested = Math.max(1, Math.min(Number(pageInput.value) || 1, pdfDoc.numPages));
    renderSpread(requested, requested < currentPage ? "prev" : "next", false);
  });
  fullscreenBtn.addEventListener("click", function () {
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    else if (reader.requestFullscreen) reader.requestFullscreen();
  });
  stage.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "PageDown") { event.preventDefault(); goNext(); }
    if (event.key === "ArrowLeft" || event.key === "PageUp") { event.preventDefault(); goPrevious(); }
    if (event.key === "Home" && pdfDoc) { event.preventDefault(); renderSpread(1, "prev", false); }
    if (event.key === "End" && pdfDoc) { event.preventDefault(); renderSpread(pdfDoc.numPages, "next", false); }
  });

  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      if (pdfDoc) renderSpread(currentPage, "next", true);
    }, 180);
  });

  buildLibrary();
  updateControls();
})();

}

/* <script> (original line 36393) */
if (SCHOOL_PAGE === "spg-alumni") {


(function(){

  'use strict';



  /* ── Fade-in on scroll — scoped to #spg-alumni ── */

  var fadeItems = document.querySelectorAll('#spg-alumni .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 37303) */
if (SCHOOL_PAGE === "spg-careers") {


(function () {

  /* Smooth scroll for "How to Apply" button */

  var scrollBtn = document.getElementById('car-scroll-btn');

  if (scrollBtn) {

    scrollBtn.addEventListener('click', function (e) {

      var target = document.getElementById('car-how-to-apply');

      if (target) {

        e.preventDefault();

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      }

    });

  }



  /* Copy email button */

  var copyBtn = document.getElementById('car-copy-email');

  var statusEl = document.getElementById('car-copy-status');

  if (copyBtn) {

    copyBtn.addEventListener('click', function () {

      var email = 'dmtsquery@gmail.com';

      function confirm() {

        copyBtn.textContent = 'Copied!';

        if (statusEl) statusEl.textContent = 'Email address copied.';

        setTimeout(function () {

          copyBtn.textContent = 'Copy email';

          if (statusEl) statusEl.textContent = '';

        }, 2000);

      }

      if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(email).then(confirm).catch(function () {

          /* fallback: select a temporary input */

          var inp = document.createElement('input');

          inp.value = email;

          document.body.appendChild(inp);

          inp.select();

          document.execCommand('copy');

          document.body.removeChild(inp);

          confirm();

        });

      } else {

        var inp = document.createElement('input');

        inp.value = email;

        document.body.appendChild(inp);

        inp.select();

        document.execCommand('copy');

        document.body.removeChild(inp);

        confirm();

      }

    });

  }



  /* Fade-in via IntersectionObserver */

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {

    var fades = document.querySelectorAll('#spg-careers .car-fade');

    var obs = new IntersectionObserver(function (entries) {

      entries.forEach(function (e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

      });

    }, { threshold: 0.12 });

    fades.forEach(function (el) { obs.observe(el); });

  }

})();


}

/* <script> (original line 38211) */
if (SCHOOL_PAGE === "spg-contact") {


(function () {

  /* Copy buttons */

  var statusEl = document.getElementById('con-copy-status');

  document.querySelectorAll('#spg-contact .con-copy-btn').forEach(function (btn) {

    btn.addEventListener('click', function () {

      var text = btn.dataset.copy;

      function confirm() {

        var orig = btn.textContent;

        btn.textContent = 'Copied!';

        if (statusEl) statusEl.textContent = text + ' copied.';

        setTimeout(function () { btn.textContent = orig; if (statusEl) statusEl.textContent = ''; }, 2000);

      }

      if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(text).then(confirm).catch(function () {

          var inp = document.createElement('input'); inp.value = text;

          document.body.appendChild(inp); inp.select(); document.execCommand('copy'); document.body.removeChild(inp); confirm();

        });

      } else {

        var inp = document.createElement('input'); inp.value = text;

        document.body.appendChild(inp); inp.select(); document.execCommand('copy'); document.body.removeChild(inp); confirm();

      }

    });

  });



  /* Fade-in */

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {

    var fades = document.querySelectorAll('#spg-contact .con-fade');

    var obs = new IntersectionObserver(function (entries) {

      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); } });

    }, { threshold: 0.1 });

    fades.forEach(function (el) { obs.observe(el); });

  }

})();


}

/* <script> (original line 39384) */
if (SCHOOL_PAGE === "spg-history") {


(function(){

  'use strict';

  var items = document.querySelectorAll('#spg-history .hist-fade');

  if (!items.length) return;

  var obs = new IntersectionObserver(function(entries) {

    entries.forEach(function(e) {

      if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

    });

  }, { threshold: 0.12 });

  items.forEach(function(el) { obs.observe(el); });

})();


}

/* <script> (original line 40244) */
if (SCHOOL_PAGE === "spg-vision") {


(function () {

  'use strict';

  /* Fade-in via IntersectionObserver — reuses sc-visible class */

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {

    var els = document.querySelectorAll('#spg-vision .vmm-fade');

    var obs = new IntersectionObserver(function (entries) {

      entries.forEach(function (e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

      });

    }, { threshold: 0.1 });

    els.forEach(function (el) { obs.observe(el); });

  }

}());


}

/* <script> (original line 40989) */
if (SCHOOL_PAGE === "spg-management") {


(function(){

  'use strict';

  var items = document.querySelectorAll('#spg-management .mgmt-fade');

  if (!items.length) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduced.matches) return;

  var obs = new IntersectionObserver(function(entries) {

    entries.forEach(function(e) {

      if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

    });

  }, { threshold: 0.12 });

  items.forEach(function(el) { obs.observe(el); });

})();


}

/* <script> (original line 41189) */
if (SCHOOL_PAGE === "spg-management") {

(function(){
  var root=document.querySelector('#spg-management .mgmt2-page'); if(!root) return;
  var track=document.getElementById('mgmt2TeamTrack');
  var teamPrev=document.getElementById('mgmt2TeamPrev'), teamNext=document.getElementById('mgmt2TeamNext');
  function teamTargets(){
    if(!track||track.clientWidth===0)return [0];
    var cards=track.querySelectorAll('.mgmt2-team-card'), firstOffset=cards[0]?.offsetLeft||0;
    var maxScroll=Math.max(0,track.scrollWidth-track.clientWidth), targets=[0];
    cards.forEach(function(card){
      var target=Math.max(0,Math.min(maxScroll,card.offsetLeft-firstOffset));
      if(Math.abs(target-targets[targets.length-1])>2)targets.push(target);
    });
    if(Math.abs(maxScroll-targets[targets.length-1])>2)targets.push(maxScroll);
    return targets;
  }
  function moveTeam(dir){
    if(!track)return;
    var targets=teamTargets();
    if(targets.length<2)return;
    var current=0, smallest=Infinity;
    targets.forEach(function(target,index){var distance=Math.abs(track.scrollLeft-target);if(distance<smallest){smallest=distance;current=index}});
    var next=(current+dir+targets.length)%targets.length;
    track.scrollTo({left:targets[next],behavior:reduce?.matches?'auto':'smooth'});
  }
  teamPrev?.addEventListener('click',function(){moveTeam(-1)});
  teamNext?.addEventListener('click',function(){moveTeam(1)});
  var items=root.querySelectorAll('.mgmt2-fade'), reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(reduce.matches||!('IntersectionObserver' in window)){items.forEach(function(el){el.classList.add('is-visible')});}
  else {var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}})},{threshold:.12});items.forEach(function(el){io.observe(el)});}
  if(track){
    track.setAttribute('tabindex','0');
    track.setAttribute('aria-label','School leadership team');
    track.addEventListener('keydown',function(event){if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();moveTeam(event.key==='ArrowRight'?1:-1)}});
  }
  var heritageTrack=document.getElementById('mgmt2HeritageTrack'), heritageCards=heritageTrack?heritageTrack.querySelectorAll('.mgmt2-heritage-card'):[], heritageIndex=0, heritageTimer;
  function heritageStep(dir){
    if(!heritageTrack||!heritageCards.length)return;
    heritageIndex=(heritageIndex+dir+heritageCards.length)%heritageCards.length;
    var spacing=Math.min(290,heritageCards[0].offsetWidth*.88);
    heritageCards.forEach(function(card,i){
      var slot=(i-heritageIndex+heritageCards.length)%heritageCards.length;
      if(slot>heritageCards.length/2)slot-=heritageCards.length;
      var distance=Math.abs(slot), visible=distance<=2;
      card.style.setProperty('--slot-x',(slot*spacing)+'px');
      card.style.setProperty('--slot-scale',distance===0?'1':distance===1?'.72':'.55');
      card.style.setProperty('--slot-opacity',visible?(distance===0?'1':distance===1?'.75':'.35'):'0');
      card.style.zIndex=String(10-Math.min(distance,9));
      card.style.pointerEvents=visible?'auto':'none';
      card.classList.toggle('is-active',distance===0);
      card.setAttribute('aria-hidden',String(!visible));
    });
  }
  document.getElementById('mgmt2HeritagePrev')?.addEventListener('click',function(){heritageStep(-1);restartHeritage()});
  document.getElementById('mgmt2HeritageNext')?.addEventListener('click',function(){heritageStep(1);restartHeritage()});
  // AUTOPLAY SPEED: 2800 milliseconds between cards; hover/focus pauses movement.
  function restartHeritage(){clearInterval(heritageTimer);if(!reduce.matches)heritageTimer=setInterval(function(){var viewport=heritageTrack.parentElement;if(!document.hidden&&!document.getElementById('spg-management').hidden&&!viewport.matches(':hover')&&!viewport.contains(document.activeElement))heritageStep(1)},2800)}
  if(heritageTrack){
    var carousel=heritageTrack.parentElement;
    carousel.setAttribute('role','region');carousel.setAttribute('aria-roledescription','carousel');carousel.setAttribute('aria-label','Our institutions');carousel.tabIndex=0;
    carousel.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();heritageStep(e.key==='ArrowRight'?1:-1);restartHeritage()}});
    heritageCards.forEach(function(card,i){
      var label=card.querySelector('small'),badge=document.createElement('span');badge.className='mgmt2-heritage-board';badge.textContent=label.textContent.split('·')[0].trim();badge.setAttribute('aria-hidden','true');card.appendChild(badge);
      card.addEventListener('click',function(){heritageStep(i-heritageIndex);restartHeritage()});
    });
    heritageStep(0);
    if('ResizeObserver' in window)new ResizeObserver(function(){heritageStep(0)}).observe(carousel);
  }
  if(heritageCards.length>1){var heritageViewport=document.querySelector('#spg-management .mgmt2-heritage-viewport'), touchStartX=0;heritageViewport?.addEventListener('mouseenter',function(){clearInterval(heritageTimer)});heritageViewport?.addEventListener('mouseleave',restartHeritage);heritageViewport?.addEventListener('focusin',function(){clearInterval(heritageTimer)});heritageViewport?.addEventListener('focusout',restartHeritage);heritageViewport?.addEventListener('touchstart',function(e){touchStartX=e.changedTouches[0].clientX},{passive:true});heritageViewport?.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-touchStartX;if(Math.abs(dx)>40){heritageStep(dx<0?1:-1);restartHeritage()}},{passive:true});window.addEventListener('resize',function(){heritageStep(0)});restartHeritage();}
})();

}

/* <script> (original line 41930) */
if (SCHOOL_PAGE === "spg-principal") {


(function(){

  'use strict';

  var items = document.querySelectorAll('#spg-principal .prnc-fade');

  if (!items.length) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduced.matches) return;

  var obs = new IntersectionObserver(function(entries) {

    entries.forEach(function(e) {

      if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

    });

  }, { threshold: 0.10 });

  items.forEach(function(el) { obs.observe(el); });

})();


}

/* <script> (original line 42868) */


(function () {

  /* Run after DOM is fully ready */

  function init() {

    var toggle = document.getElementById('navSearchToggle');

    if (!toggle) return;



/* ── Catalogue ── */

    var CATALOGUE = [

      { group:'Actions',         title:'Apply for Admission',         subtitle:'Start your admission journey',        icon:'fa-file-alt',       href:'admission-process.html' },

      { group:'Actions',         title:'Download Prospectus',         subtitle:'Get the school prospectus PDF',       icon:'fa-download',       href:'prospectus.html' },

      { group:'Actions',         title:'Contact Us',                  subtitle:'Reach the school office',             icon:'fa-phone-alt',      href:'contact-us.html' },

      { group:'Actions',         title:'View Gallery',                subtitle:'Photos from school events',           icon:'fa-images',         href:'gallery.html' },

      { group:'Actions',         title:'Careers at School',           subtitle:'Open positions & opportunities',      icon:'fa-briefcase',      href:'work-with-us.html' },

      { group:'Programmes',      title:'Pre-Primary',                 subtitle:'Nursery · LKG · UKG',                icon:'fa-child',          href:'pre-primary.html' },

      { group:'Programmes',      title:'Primary School',              subtitle:'Std I to Std V',                     icon:'fa-book-open',      href:'primary.html' },

      { group:'Programmes',      title:'Middle School',               subtitle:'Std VI to Std VIII',                 icon:'fa-school',         href:'middle.html' },

      { group:'Programmes',      title:'High School',                 subtitle:'Std IX & Std X',                     icon:'fa-graduation-cap', href:'high.html' },

      { group:'Academics',       title:'Curriculum',                  subtitle:'Academic curriculum & syllabus',      icon:'fa-scroll',         href:'curriculum.html' },

      { group:'Academics',       title:'Subjects Offered',            subtitle:'Subjects available by class',         icon:'fa-list-ul',        href:'subjects-offered.html' },

      { group:'Academics',       title:'Examination Rules & Pattern', subtitle:'Exam structure & assessment guide',   icon:'fa-clipboard-check',href:'examination-rules-pattern.html' },

      { group:'Academics',       title:'Scholastics',                 subtitle:'Academic performance & awards',       icon:'fa-graduation-cap', href:'scholastics.html' },

      { group:'Academics',       title:'Co-Scholastics',              subtitle:'Sports, arts & extra-curriculars',    icon:'fa-palette',        href:'co-scholastics.html' },

      { group:'Academics',       title:'Achievements',                subtitle:'Awards, medals & recognitions',       icon:'fa-trophy',         href:'achievements.html' },

      { group:'Admissions',      title:'Admission Process',           subtitle:'How to apply & requirements',         icon:'fa-clipboard-list', href:'admission-process.html' },

      { group:'Admissions',      title:'Prospectus',                  subtitle:'Download the school prospectus',      icon:'fa-file-pdf',       href:'prospectus.html' },

    ];



    /* ── Popular search keywords ── */

    var POPULAR = [

      { label:'Pre-Primary',        icon:'fa-child',          href:'pre-primary.html' },

      { label:'Primary',            icon:'fa-book-open',      href:'primary.html' },

      { label:'High School',        icon:'fa-graduation-cap', href:'high.html' },

      { label:'Admissions',         icon:'fa-clipboard-list', href:'admission-process.html' },

      { label:"Principal's Message",icon:'fa-user-tie',       href:'principals-message.html' },

      { label:'Our History',        icon:'fa-history',        href:'history.html' },

      { label:'Academics',          icon:'fa-book',           href:'curriculum.html' },

      { label:'Curriculum',         icon:'fa-scroll',         href:'curriculum.html' },

      { label:'Gallery',            icon:'fa-images',         href:'gallery.html' },

      { label:'Contact',            icon:'fa-phone-alt',      href:'contact-us.html' },

    ];



    /* ── Build modal ── */

    var bd = document.createElement('div');

    bd.className = 'smodal-backdrop';

    bd.setAttribute('role', 'dialog');

    bd.setAttribute('aria-modal', 'true');

    bd.setAttribute('aria-label', 'Site search');

    bd.hidden = true;

    bd.innerHTML =

      '<div class="smodal">' +

        '<div class="smodal-input-row">' +

          '<span class="smodal-icon"><i class="fas fa-search"></i></span>' +

          '<input class="smodal-input" id="smodalInput" type="search" placeholder="Search pages, programmes, actions…" autocomplete="off">' +

          '<button class="smodal-kbd-esc" id="smodalClose" type="button">esc</button>' +

        '</div>' +

        '<div class="smodal-results" id="smodalList"></div>' +

        '<div class="smodal-footer">' +

          '<span class="smodal-hint"><kbd>↑</kbd><kbd>↓</kbd> navigate</span>' +

          '<span class="smodal-hint"><kbd>↵</kbd> select</span>' +

          '<span class="smodal-hint"><kbd>Esc</kbd> close</span>' +

        '</div>' +

      '</div>';

    document.body.appendChild(bd);



    var inp   = bd.querySelector('#smodalInput');

    var list  = bd.querySelector('#smodalList');

    var closeBtn = bd.querySelector('#smodalClose');



    /* ── State ── */

    var currentItems = [];  /* flat ordered list matching rendered buttons */

    var activeIdx = -1;

    var previousFocus = null;

    var previousOverflow = '';



    /* ── Helpers ── */

    function esc(s) {

      return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    }

    function bold(text, q) {

      if (!q) return esc(text);

      var lo = text.toLowerCase(), lq = q.toLowerCase();

      var i = lo.indexOf(lq);

      if (i < 0) return esc(text);

      return esc(text.slice(0,i)) + '<strong style="color:var(--color-primary);font-weight:700">' + esc(text.slice(i,i+q.length)) + '</strong>' + esc(text.slice(i+q.length));

    }

    function itemRow(item, q) {

      return '<button class="smodal-item" type="button">' +

        '<span class="smodal-item-icon"><i class="fas ' + item.icon + '"></i></span>' +

        '<span class="smodal-item-text">' +

          '<span class="smodal-item-title">' + bold(item.title, q) + '</span>' +

          '<span class="smodal-item-subtitle">' + esc(item.subtitle || '') + '</span>' +

        '</span>' +

        '<span class="smodal-item-arrow"><i class="fas fa-chevron-right"></i></span>' +

      '</button>';

    }



    /* ── Render (stores flat item order in currentItems) ── */

    function render(items, q) {

      currentItems = items;

      activeIdx = -1;

      if (!items.length) {

        list.innerHTML = '<div class="smodal-empty">No results for <strong>' + esc(q) + '</strong></div>';

        return;

      }

      var groups = {}, order = [];

      items.forEach(function(item) {

        if (!groups[item.group]) { groups[item.group] = []; order.push(item.group); }

        groups[item.group].push(item);

      });

      var html = '';

      order.forEach(function(g) {

        html += '<div class="smodal-group-label">' + esc(g) + '</div>';

        groups[g].forEach(function(item) { html += itemRow(item, q || ''); });

      });

      list.innerHTML = html;

    }



    function chipsHtml() {

      var h = '<div class="smodal-popular"><div class="smodal-popular-label">Popular searches</div><div class="smodal-chips">';

      POPULAR.forEach(function(p) {

        h += '<button class="smodal-chip" type="button" data-href="' + p.href + '"><i class="fas ' + p.icon + '"></i>' + esc(p.label) + '</button>';

      });

      return h + '</div></div>';

    }



    function showDefault() {

      currentItems = CATALOGUE;

      activeIdx = -1;

      var groups = {}, order = [];

      CATALOGUE.forEach(function(item) {

        if (!groups[item.group]) { groups[item.group] = []; order.push(item.group); }

        groups[item.group].push(item);

      });

      var html = chipsHtml();

      order.forEach(function(g) {

        html += '<div class="smodal-group-label">' + esc(g) + '</div>';

        groups[g].forEach(function(item) { html += itemRow(item, ''); });

      });

      list.innerHTML = html;

    }



    function showFiltered(q) {

      var lq = q.toLowerCase();

      var hits = CATALOGUE.filter(function(it) {

        return it.title.toLowerCase().indexOf(lq) >= 0 ||

               (it.subtitle || '').toLowerCase().indexOf(lq) >= 0 ||

               it.group.toLowerCase().indexOf(lq) >= 0;

      }).slice(0, 12);

      render(hits, q);

    }



    /* ── Active highlight ── */

    function setActive(idx) {

      var btns = list.querySelectorAll('.smodal-item');

      for (var i = 0; i < btns.length; i++) btns[i].classList.remove('smod-active');

      if (idx >= 0 && btns[idx]) { btns[idx].classList.add('smod-active'); btns[idx].scrollIntoView({block:'nearest'}); }

      activeIdx = idx;

    }



    /* ── Select an item ── */

    function select(item) {
      close();
      var href = item && item.href;
      if (!href || href === '#') return;
      if (href.charAt(0) !== '#') { window.location.assign(href); return; }
      var id = href.slice(1);
      var target = document.getElementById(id) || document.querySelector('[data-section="' + id + '"]');
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      else window.location.assign('index.html' + href);
    }

    /* ── Open / close ── */

    function open() {

      if (!bd.hidden) return;

      previousFocus = document.activeElement;

      previousOverflow = document.body.style.overflow;

      bd.hidden = false;

      toggle.setAttribute('aria-expanded', 'true');

      inp.value = '';

      showDefault();

      setTimeout(function() { inp.focus(); }, 50);

      document.body.style.overflow = 'hidden';

    }

    function close() {

      if (bd.hidden) return;

      bd.hidden = true;

      toggle.setAttribute('aria-expanded', 'false');

      document.body.style.overflow = previousOverflow;

      activeIdx = -1;

      if (previousFocus && previousFocus.isConnected) previousFocus.focus();

    }



    /* ── Event delegation on results list ── */

    list.addEventListener('click', function(e) {

      /* Popular chip click */

      var chip = e.target.closest('.smodal-chip');

      if (chip) { select({ href: chip.getAttribute('data-href') }); return; }

      /* Regular result item */

      var btn = e.target.closest('.smodal-item');

      if (!btn) return;

      var btns = list.querySelectorAll('.smodal-item');

      for (var i = 0; i < btns.length; i++) {

        if (btns[i] === btn) { select(currentItems[i]); return; }

      }

    });

    list.addEventListener('mouseover', function(e) {

      var btn = e.target.closest('.smodal-item');

      if (!btn) return;

      var btns = list.querySelectorAll('.smodal-item');

      for (var i = 0; i < btns.length; i++) {

        if (btns[i] === btn) { setActive(i); return; }

      }

    });



    /* ── Input ── */

    inp.addEventListener('input', function() {

      var q = inp.value.trim();

      q ? showFiltered(q) : showDefault();

    });

    inp.addEventListener('keydown', function(e) {

      var btns = list.querySelectorAll('.smodal-item');

      var len  = btns.length;

      if (e.key === 'ArrowDown')  { e.preventDefault(); setActive(activeIdx + 1 < len ? activeIdx + 1 : 0); }

      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(activeIdx - 1 >= 0 ? activeIdx - 1 : len - 1); }

      else if (e.key === 'Enter')   { e.preventDefault(); select(currentItems[activeIdx >= 0 ? activeIdx : 0]); }

      else if (e.key === 'Escape')  { close(); }

    });



    /* ── Toggle / close triggers ── */

    toggle.addEventListener('click', function(e) { e.stopPropagation(); bd.hidden ? open() : close(); });

    closeBtn.addEventListener('click', close);

    bd.addEventListener('click', function(e) { if (e.target === bd) close(); });

    document.addEventListener('keydown', function(e) {

      if (e.key === 'Escape' && !bd.hidden) close();

      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); bd.hidden ? open() : close(); }

      if (e.key === 'Tab' && !bd.hidden) {
        var focusable = Array.prototype.slice.call(bd.querySelectorAll('button:not([disabled]),input:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])'))
          .filter(function(el) { return el.offsetParent !== null; });
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }

    });

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', init);

  } else {

    init();

  }

}());



/* <script> (original line 45484) */
if (SCHOOL_PAGE === "spg-preprimary") {


(function () {

  'use strict';

  /* Bounce fade-in via IntersectionObserver, only while this page is visible. */
  var observer;
  var scrollTopButton = document.querySelector('#spg-preprimary .ppr-scroll-top');
  var preprimarySection = document.getElementById('spg-preprimary');
  function updateScrollTop() {
    if (!scrollTopButton || !preprimarySection) return;
    var active = (SCHOOL_PAGE === 'spg-preprimary') && !preprimarySection.hidden;
    scrollTopButton.classList.toggle('is-visible', active && window.scrollY > 420);
  }
  window.addEventListener('scroll', updateScrollTop, { passive: true });
  function scrollPreprimaryTop(event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    var target = document.getElementById('spg-preprimary');
    if (target && target.scrollIntoView) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
  if (scrollTopButton) scrollTopButton.addEventListener('click', scrollPreprimaryTop);
  updateScrollTop();
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function attach() {
    if ((SCHOOL_PAGE === 'spg-preprimary') && !document.getElementById('ppr-room-fonts')) {
      var fonts = document.createElement('link');
      fonts.id = 'ppr-room-fonts'; fonts.rel = 'stylesheet';
      fonts.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap';
      document.head.appendChild(fonts);
    }
    if (observer || reduced || !('IntersectionObserver' in window) || (SCHOOL_PAGE !== 'spg-preprimary')) return;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('sc-visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('#spg-preprimary .ppr-bounce').forEach(function (el) { observer.observe(el); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach);
  else attach();

})();


}

/* <script> (original line 45978) */


(function(){

  function priFileLabel(inp, dispId){

    inp.addEventListener('change',function(){

      var d=document.getElementById(dispId);

      if(d) d.textContent = this.files[0] ? this.files[0].name : '';

    });

  }

  var ph=document.querySelector('#pri-admission-form [name="student_photo"]');

  var bc=document.querySelector('#pri-admission-form [name="birth_cert"]');

  if(ph) priFileLabel(ph,'pri-photo-name');

  if(bc) priFileLabel(bc,'pri-cert-name');



  var form=document.getElementById('pri-admission-form');

  if(!form) return;

  form.addEventListener('submit',function(e){

    e.preventDefault();

    var errors=[];

    var fields=form.querySelectorAll('[required]');

    fields.forEach(function(f){ f.classList.remove('pri-error'); });

    fields.forEach(function(f){

      var val=f.value.trim();

      if(!val){ f.classList.add('pri-error'); errors.push(f.closest('.pri-field').querySelector('label').textContent.replace('*','').trim()+' is required.'); return; }

      if(f.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){ f.classList.add('pri-error'); errors.push('Please enter a valid email address.'); }

      if(f.name==='mobile'&&!/^[6-9][0-9]{9}$/.test(val.replace(/\s/g,''))){ f.classList.add('pri-error'); errors.push('Please enter a valid 10-digit mobile number.'); }

      if(f.type==='file'&&!f.files.length){ f.closest('.pri-field').querySelector('.pri-upload-label').style.borderColor='var(--color-primary)'; errors.push(f.closest('.pri-field').querySelector('label').textContent.replace('*','').trim()+' is required.'); }

    });

    var dob=form.querySelector('[name="dob"]');

    if(dob&&dob.value){

      var age=(new Date()-new Date(dob.value))/31557600000;

      if(age<5||age>12){ dob.classList.add('pri-error'); errors.push('Child age must be between 6 and 10 years for Primary admission.'); }

    }

    var errDiv=document.getElementById('pri-form-errors');

    if(errors.length){

      errDiv.innerHTML=errors.map(function(m){return '<div>• '+m+'</div>';}).join('');

      errDiv.style.display='block';

      errDiv.scrollIntoView({behavior:'smooth',block:'center'});

      return;

    }

    errDiv.style.display='none';

    form.style.display='none';

    document.getElementById('pri-success').classList.add('show');

    document.getElementById('pri-success').scrollIntoView({behavior:'smooth',block:'center'});

  });

}());



/* <script> (original line 46864) */


(function(){

  function midFileLabel(inp, dispId){

    inp.addEventListener('change',function(){

      var d=document.getElementById(dispId);

      if(d) d.textContent = this.files[0] ? this.files[0].name : '';

    });

  }

  var ph=document.querySelector('#mid-admission-form [name="student_photo"]');

  var bc=document.querySelector('#mid-admission-form [name="birth_cert"]');

  if(ph) midFileLabel(ph,'mid-photo-name');

  if(bc) midFileLabel(bc,'mid-cert-name');



  var form=document.getElementById('mid-admission-form');

  if(!form) return;

  form.addEventListener('submit',function(e){

    e.preventDefault();

    var errors=[];

    var fields=form.querySelectorAll('[required]');

    fields.forEach(function(f){ f.classList.remove('mid-error'); });

    fields.forEach(function(f){

      var val=f.value.trim();

      if(!val){ f.classList.add('mid-error'); errors.push(f.closest('.mid-field').querySelector('label').textContent.replace('*','').trim()+' is required.'); return; }

      if(f.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){ f.classList.add('mid-error'); errors.push('Please enter a valid email address.'); }

      if(f.name==='mobile'&&!/^[6-9][0-9]{9}$/.test(val.replace(/\s/g,''))){ f.classList.add('mid-error'); errors.push('Please enter a valid 10-digit mobile number.'); }

      if(f.type==='file'&&!f.files.length){ f.closest('.mid-field').querySelector('.mid-upload-label').style.borderColor='var(--color-primary)'; errors.push(f.closest('.mid-field').querySelector('label').textContent.replace('*','').trim()+' is required.'); }

    });

    var dob=form.querySelector('[name="dob"]');

    if(dob&&dob.value){

      var age=(new Date()-new Date(dob.value))/31557600000;

      if(age<9||age>15){ dob.classList.add('mid-error'); errors.push('Child age must be between 10 and 13 years for Middle School admission.'); }

    }

    var errDiv=document.getElementById('mid-form-errors');

    if(errors.length){

      errDiv.innerHTML=errors.map(function(m){return '<div>• '+m+'</div>';}).join('');

      errDiv.style.display='block';

      errDiv.scrollIntoView({behavior:'smooth',block:'center'});

      return;

    }

    errDiv.style.display='none';

    form.style.display='none';

    document.getElementById('mid-success').classList.add('show');

    document.getElementById('mid-success').scrollIntoView({behavior:'smooth',block:'center'});

  });

}());



/* <script> (original line 47822) */


(function(){

  function hiFileLabel(inp, dispId){

    inp.addEventListener('change',function(){

      var d=document.getElementById(dispId);

      if(d) d.textContent = this.files[0] ? this.files[0].name : '';

    });

  }

  var ph=document.querySelector('#hi-admission-form [name="student_photo"]');

  var bc=document.querySelector('#hi-admission-form [name="birth_cert"]');

  var ar=document.querySelector('#hi-admission-form [name="academic_records"]');

  if(ph) hiFileLabel(ph,'hi-photo-name');

  if(bc) hiFileLabel(bc,'hi-cert-name');

  if(ar) hiFileLabel(ar,'hi-rec-name');



  var form=document.getElementById('hi-admission-form');

  if(!form) return;

  form.addEventListener('submit',function(e){

    e.preventDefault();

    var errors=[];

    var fields=form.querySelectorAll('[required]');

    fields.forEach(function(f){ f.classList.remove('hi-error'); });

    fields.forEach(function(f){

      var val=f.value.trim();

      if(!val){ f.classList.add('hi-error'); errors.push(f.closest('.hi-field').querySelector('label').textContent.replace('*','').trim()+' is required.'); return; }

      if(f.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){ f.classList.add('hi-error'); errors.push('Please enter a valid email address.'); }

      if(f.name==='mobile'&&!/^[6-9][0-9]{9}$/.test(val.replace(/\s/g,''))){ f.classList.add('hi-error'); errors.push('Please enter a valid 10-digit mobile number.'); }

      if(f.type==='file'&&!f.files.length){ f.closest('.hi-field').querySelector('.hi-upload-label').style.borderColor='var(--color-primary)'; errors.push(f.closest('.hi-field').querySelector('label').textContent.replace('*','').trim()+' is required.'); }

    });

    var dob=form.querySelector('[name="dob"]');

    if(dob&&dob.value){

      var age=(new Date()-new Date(dob.value))/31557600000;

      if(age<12||age>18){ dob.classList.add('hi-error'); errors.push('Student age must be between 13 and 16 years for High School admission.'); }

    }

    var errDiv=document.getElementById('hi-form-errors');

    if(errors.length){

      errDiv.innerHTML=errors.map(function(m){return '<div>• '+m+'</div>';}).join('');

      errDiv.style.display='block';

      errDiv.scrollIntoView({behavior:'smooth',block:'center'});

      return;

    }

    errDiv.style.display='none';

    form.style.display='none';

    document.getElementById('hi-success').classList.add('show');

    document.getElementById('hi-success').scrollIntoView({behavior:'smooth',block:'center'});

  });

}());



/* <script> (original line 48168) */


(function(){

  /* Only activate theme tester when ?theme=edit is in the URL */

  if(location.search.indexOf('theme=edit')===-1)return;

  var panel=document.getElementById('theme-tester');

  panel.hidden=false;



  var DEFAULTS={

    '--color-primary':'#D50000',

    '--color-secondary':'#E5C16A',

    '--color-cta':'#FF8000',

    '--color-bg-main':'#FFF9F0',

    '--color-bg-section':'#F1E7DC',

    '--color-text':'#343434'

  };



  function hexToRgb(hex){

    hex=hex.replace('#','');

    if(hex.length===3)hex=hex.split('').map(function(c){return c+c;}).join('');

    var r=parseInt(hex.substring(0,2),16);

    var g=parseInt(hex.substring(2,4),16);

    var b=parseInt(hex.substring(4,6),16);

    return r+','+g+','+b;

  }



  document.querySelectorAll('#theme-pickers input[type=color]').forEach(function(inp){

    inp.addEventListener('input',function(){

      var v=inp.dataset.var;

      document.documentElement.style.setProperty(v,inp.value);

      if(inp.dataset.rgb){

        document.documentElement.style.setProperty(inp.dataset.rgb,hexToRgb(inp.value));

      }

    });

  });



  document.getElementById('theme-copy-btn').addEventListener('click',function(){

    var lines=[':root {'];

    document.querySelectorAll('#theme-pickers input[type=color]').forEach(function(inp){

      lines.push('  '+inp.dataset.var+': '+inp.value+';');

      if(inp.dataset.rgb){

        lines.push('  '+inp.dataset.rgb+': '+hexToRgb(inp.value)+';');

      }

    });

    lines.push('}');

    var css=lines.join('\n');

    navigator.clipboard.writeText(css).then(function(){

      var msg=document.getElementById('theme-copy-msg');

      msg.style.display='block';

      setTimeout(function(){msg.style.display='none';},2500);

    }).catch(function(){

      var ta=document.createElement('textarea');

      ta.value=css;

      document.body.appendChild(ta);

      ta.select();

      document.execCommand('copy');

      document.body.removeChild(ta);

    });

  });



  document.getElementById('theme-reset-btn').addEventListener('click',function(){

    Object.keys(DEFAULTS).forEach(function(v){

      document.documentElement.style.removeProperty(v);

    });

    document.querySelectorAll('#theme-pickers input[type=color]').forEach(function(inp){

      inp.value=DEFAULTS[inp.dataset.var]||inp.value;

    });

    /* Reset RGB channels too */

    document.documentElement.style.setProperty('--color-primary-rgb','213,0,0');

    document.documentElement.style.setProperty('--color-secondary-rgb','229,193,106');

  });

}());



/* <script id="faqbot-js"> (original line 49336) */


(function () {

  'use strict';



  /* ── FAQ DATA ──────────────────────────────────────────────

     Edit questions, answers and keywords here.

     showAdmissionsLink: true  → shows "View Admission Procedure" link under answer

     keywords: case-insensitive substrings matched against typed text

  ─────────────────────────────────────────────────────────── */

  var FAQS = [

    {

      id: 'q1',

      question: 'For which classes are admissions open?',

      answer: 'Admissions are generally open for Nursery, LKG and UKG. Admissions to higher classes are subject to seat availability.',

      htmlAnswer: null,

      showAdmissionsLink: true,

      keywords: ['classes', 'nursery', 'lkg', 'ukg', 'seats', 'class', 'standard', 'grade', 'open', 'available class']

    },

    {

      id: 'q2',

      question: 'When are admission forms available, and how can I apply?',

      answer: "Admissions generally open in November. The advertisement, application dates and instructions are published on the school’s official website before admissions commence. Parents can apply online during the specified period.",

      htmlAnswer: null,

      showAdmissionsLink: true,

      keywords: ['form', 'apply', 'application', 'online', 'dates', 'november', 'available', 'how', 'when', 'register', 'registration', 'procedure', 'process', 'start', 'begin']

    },

    {

      id: 'q3',

      question: 'What is the age eligibility for admission?',

      answer: null,

      htmlAnswer: 'The age criteria as on 30th June of the academic year are:<ul class="faqbot-age-list"><li><strong>Nursery:</strong> 3 years</li><li><strong>LKG:</strong> 4 years</li><li><strong>UKG:</strong> 5 years</li></ul>',

      showAdmissionsLink: false,

      keywords: ['age', 'eligibility', 'years', 'old', 'eligible', 'year', 'criteria', 'born', 'birthday', 'cut', 'eligible age', 'how old']

    },

    {

      id: 'q4',

      question: 'What documents are required for admission?',

      answer: "Parents must submit the child’s birth certificate, Aadhaar card, photographs, residential proof, signed declaration and previous report card, wherever applicable. Additional documents may be required depending on the class.",

      htmlAnswer: null,

      showAdmissionsLink: true,

      keywords: ['documents', 'certificate', 'aadhaar', 'photo', 'proof', 'required', 'submit', 'papers', 'birth', 'report', 'card', 'declaration', 'residential', 'photograph', 'docs', 'document']

    },

    {

      id: 'q5',

      question: 'Does submitting an application guarantee admission?',

      answer: 'No. Admission is subject to seat availability and the school’s admission procedure. Selected candidates will be informed through email.',

      htmlAnswer: null,

      showAdmissionsLink: false,

      keywords: ['guarantee', 'selected', 'confirm', 'email', 'result', 'guaranteed', 'sure', 'certain', 'seat', 'confirmed', 'inform', 'notification', 'assured', 'secure']

    }

  ];



  /* ── STATE ─────────────────────────────────────────────── */

  var isOpen    = false;

  var askedIds  = [];



  /* ── ELEMENTS ──────────────────────────────────────────── */

  var launcher  = document.getElementById('faqbot-launcher');

  var panel     = document.getElementById('faqbot-panel');

  var messages  = document.getElementById('faqbot-messages');

  var inputEl   = document.getElementById('faqbot-input');

  var sendBtn   = document.getElementById('faqbot-send');

  var closeBtnEl= document.getElementById('faqbot-close');

  var restartBtn= document.getElementById('faqbot-restart');

  var iconChat  = document.getElementById('faqbot-icon-chat');

  var iconClose = document.getElementById('faqbot-icon-close');



  var reducedMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);



  /* ── OPEN / CLOSE PANEL ────────────────────────────────── */

  function openPanel() {

    isOpen = true;

    panel.removeAttribute('hidden');

    // Trigger animation on next frame

    requestAnimationFrame(function () {

      requestAnimationFrame(function () {

        panel.classList.add('faqbot-panel-open');

      });

    });

    launcher.setAttribute('aria-expanded', 'true');

    iconChat.style.display  = 'none';

    iconClose.style.display = '';

    // Prevent body scroll on mobile bottom sheet

    if (window.innerWidth < 600) {

      document.body.style.overflow = 'hidden';

    }

    // Greet on first open

    if (messages.children.length === 0) {

      showGreeting();

    }

    // Move focus to first chip or input

    setTimeout(function () {

      var firstChip = panel.querySelector('.faqbot-chip');

      if (firstChip) { firstChip.focus(); }

      else { inputEl.focus(); }

    }, reducedMotion ? 10 : 230);

  }



  function closePanel() {

    isOpen = false;

    panel.classList.remove('faqbot-panel-open');

    var delay = reducedMotion ? 0 : 210;

    setTimeout(function () {

      if (!isOpen) { panel.setAttribute('hidden', ''); }

    }, delay);

    launcher.setAttribute('aria-expanded', 'false');

    iconChat.style.display  = '';

    iconClose.style.display = 'none';

    document.body.style.overflow = '';

    launcher.focus();

  }



  launcher.addEventListener('click', function () {

    if (isOpen) { closePanel(); } else { openPanel(); }

  });

  closeBtnEl.addEventListener('click', closePanel);



  /* ── KEYBOARD: Escape closes; Tab trapped on mobile ─────── */

  document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape' && isOpen) {

      closePanel();

      return;

    }

    if (isOpen && window.innerWidth < 600 && e.key === 'Tab') {

      var focusable = Array.prototype.slice.call(

        panel.querySelectorAll('button:not([disabled]), input:not([disabled])')

      );

      if (!focusable.length) { return; }

      var first = focusable[0];

      var last  = focusable[focusable.length - 1];

      if (e.shiftKey) {

        if (document.activeElement === first) { e.preventDefault(); last.focus(); }

      } else {

        if (document.activeElement === last) { e.preventDefault(); first.focus(); }

      }

    }

  });



  /* ── GREETING ──────────────────────────────────────────── */

  function showGreeting() {

    addBotBubble('Hello! I can answer common questions about admissions at Dr. Mar Theophilus School. Please choose a question below.', false);

    showChips(FAQS, false);

  }



  /* ── ADD BOT BUBBLE ────────────────────────────────────── */

  function addBotBubble(content, isHtml) {

    var wrap   = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-bot';

    var bubble = document.createElement('div');

    bubble.className = 'faqbot-bubble faqbot-bubble-bot';

    if (isHtml) {

      bubble.innerHTML = content; // only pre-built safe HTML (Q3 age list)

    } else {

      bubble.textContent = content;

    }

    wrap.appendChild(bubble);

    messages.appendChild(wrap);

    scrollBottom();

    return wrap;

  }



  /* ── ADD USER BUBBLE ───────────────────────────────────── */

  function addUserBubble(text) {

    var wrap   = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-user';

    var bubble = document.createElement('div');

    bubble.className = 'faqbot-bubble faqbot-bubble-user';

    bubble.textContent = text; // always textContent — never innerHTML

    wrap.appendChild(bubble);

    messages.appendChild(wrap);

    scrollBottom();

  }



  /* ── TYPING INDICATOR ──────────────────────────────────── */

  function addTypingIndicator() {

    var wrap   = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-bot';

    wrap.id    = 'faqbot-typing';

    var bubble = document.createElement('div');

    bubble.className = 'faqbot-bubble faqbot-bubble-bot faqbot-typing-bubble';

    if (reducedMotion) {

      bubble.textContent = '…'; // static ellipsis

    } else {

      var d1 = document.createElement('span'); d1.className = 'faqbot-dot';

      var d2 = document.createElement('span'); d2.className = 'faqbot-dot';

      var d3 = document.createElement('span'); d3.className = 'faqbot-dot';

      bubble.appendChild(d1); bubble.appendChild(d2); bubble.appendChild(d3);

    }

    wrap.appendChild(bubble);

    messages.appendChild(wrap);

    scrollBottom();

  }



  function removeTypingIndicator() {

    var el = document.getElementById('faqbot-typing');

    if (el && el.parentNode) { el.parentNode.removeChild(el); }

  }



  /* ── REMOVE ALL CHIPS ──────────────────────────────────── */

  function removeChips() {

    var all = messages.querySelectorAll('.faqbot-chips-wrap');

    for (var i = 0; i < all.length; i++) {

      if (all[i].parentNode) { all[i].parentNode.removeChild(all[i]); }

    }

  }



  /* ── SHOW QUESTION CHIPS ───────────────────────────────── */

  function showChips(faqs, isSubset) {

    removeChips();

    var wrap = document.createElement('div');

    wrap.className = 'faqbot-chips-wrap';

    faqs.forEach(function (faq) {

      var btn = document.createElement('button');

      btn.type = 'button';

      btn.className = 'faqbot-chip' + (askedIds.indexOf(faq.id) >= 0 ? ' faqbot-chip-asked' : '');

      btn.textContent = faq.question;

      btn.dataset.faqId = faq.id;

      btn.addEventListener('click', function () { handleChip(faq); });

      wrap.appendChild(btn);

    });

    messages.appendChild(wrap);

    scrollBottom();

    // Focus first chip

    var first = wrap.querySelector('.faqbot-chip');

    if (first && isSubset) { first.focus(); }

  }



  /* ── SHOW ACTION CHIPS ─────────────────────────────────── */

  function showActionChips() {

    removeChips();

    var wrap = document.createElement('div');

    wrap.className = 'faqbot-chips-wrap faqbot-action-chips';



    var askBtn = document.createElement('button');

    askBtn.type = 'button';

    askBtn.className = 'faqbot-chip faqbot-chip-action';

    askBtn.textContent = 'Ask another question';

    askBtn.addEventListener('click', function () { removeChips(); showChips(FAQS, true); });

    wrap.appendChild(askBtn);



    var rstBtn = document.createElement('button');

    rstBtn.type = 'button';

    rstBtn.className = 'faqbot-chip faqbot-chip-action';

    rstBtn.textContent = 'Restart';

    rstBtn.addEventListener('click', restartConversation);

    wrap.appendChild(rstBtn);



    messages.appendChild(wrap);

    scrollBottom();

  }



  /* ── HANDLE CHIP CLICK ─────────────────────────────────── */

  function handleChip(faq) {

    removeChips();

    addUserBubble(faq.question);

    if (askedIds.indexOf(faq.id) < 0) { askedIds.push(faq.id); }

    addTypingIndicator();



    setTimeout(function () {

      removeTypingIndicator();

      deliverAnswer(faq);

    }, reducedMotion ? 0 : 600);

  }



  /* ── DELIVER ANSWER ────────────────────────────────────── */

  function deliverAnswer(faq) {

    if (faq.htmlAnswer) {

      addBotBubble(faq.htmlAnswer, true);

    } else {

      addBotBubble(faq.answer, false);

    }

    // "View Admission Procedure" link for Q1, Q2, Q4

    if (faq.showAdmissionsLink) {

      addAdmissionsLink();

    }

    // If all 5 answered → closing message + contact

    if (askedIds.length >= FAQS.length) {

      addBotBubble('Is there anything else? You can also contact the school office.', false);

      addContactActions();

    } else {

      showActionChips();

    }

  }



  /* ── ADMISSIONS LINK ───────────────────────────────────── */

  function addAdmissionsLink() {

    var wrap = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-bot';

    var btn  = document.createElement('button');

    btn.type = 'button';

    btn.className = 'faqbot-link-btn';

    btn.textContent = 'View the Admission Procedure';

    btn.addEventListener('click', function () {

      closePanel();

      window.location.href = 'admission-process.html';

    });

    wrap.appendChild(btn);

    messages.appendChild(wrap);

    scrollBottom();

  }



  /* ── CONTACT ACTIONS ───────────────────────────────────── */

  function addContactActions() {

    var wrap    = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-bot';

    var actions = document.createElement('div');

    actions.className = 'faqbot-contact-actions';



    var callA = document.createElement('a');

    callA.className = 'faqbot-contact-btn';

    callA.href      = 'tel:+917720043214';

    callA.textContent = 'Call  +91 772 004 3214';



    var emailA = document.createElement('a');

    emailA.className = 'faqbot-contact-btn';

    emailA.href      = 'mailto:dmtsquery@gmail.com';

    emailA.textContent = 'Email dmtsquery@gmail.com';



    var contactBtn = document.createElement('button');

    contactBtn.type = 'button';

    contactBtn.className = 'faqbot-contact-btn';

    contactBtn.textContent = 'Contact page';

    contactBtn.addEventListener('click', function () {

      closePanel();

      window.location.href = 'contact-us.html';

    });



    var note = document.createElement('p');

    note.className = 'faqbot-contact-note';

    note.textContent = 'Office help for the admission form: 10:00 a.m. to 12:00 noon.';



    actions.appendChild(callA);

    actions.appendChild(emailA);

    actions.appendChild(contactBtn);

    actions.appendChild(note);

    wrap.appendChild(actions);

    messages.appendChild(wrap);

    scrollBottom();

  }



  /* ── FALLBACK ──────────────────────────────────────────── */

  function showFallback() {

    addBotBubble("I’m sorry, I only have answers to the questions listed here. For anything else, please contact the school office.", false);

    addContactActions();

    showActionChips();

  }



  /* ── KEYWORD MATCHING ──────────────────────────────────── */

  function matchKeywords(text) {

    var lower   = text.toLowerCase().trim();

    var matched = [];

    for (var i = 0; i < FAQS.length; i++) {

      var faq = FAQS[i];

      for (var j = 0; j < faq.keywords.length; j++) {

        if (lower.indexOf(faq.keywords[j]) !== -1) {

          matched.push(faq);

          break;

        }

      }

    }

    return matched;

  }



  /* ── HANDLE TEXT INPUT ─────────────────────────────────── */

  function handleSend() {

    var raw = inputEl.value.trim();

    if (!raw) { return; }

    inputEl.value = '';

    removeChips();

    addUserBubble(raw); // textContent — safe



    var matched = matchKeywords(raw);

    addTypingIndicator();



    setTimeout(function () {

      removeTypingIndicator();

      if (matched.length === 1) {

        var faq = matched[0];

        if (askedIds.indexOf(faq.id) < 0) { askedIds.push(faq.id); }

        deliverAnswer(faq);

      } else if (matched.length > 1) {

        addBotBubble('I found a few questions that might help. Please choose one:', false);

        showChips(matched, true);

      } else {

        showFallback();

      }

    }, reducedMotion ? 0 : 600);

  }



  sendBtn.addEventListener('click', handleSend);

  inputEl.addEventListener('keydown', function (e) {

    if (e.key === 'Enter') { e.preventDefault(); handleSend(); }

  });



  /* ── RESTART ───────────────────────────────────────────── */

  function restartConversation() {

    askedIds = [];

    while (messages.firstChild) { messages.removeChild(messages.firstChild); }

    showGreeting();

  }

  restartBtn.addEventListener('click', restartConversation);



  /* ── SCROLL TO BOTTOM ──────────────────────────────────── */

  function scrollBottom() {

    messages.scrollTop = messages.scrollHeight;

  }



  /* ── PULSE RING (first 6 s, then removed) ──────────────── */

  if (!reducedMotion) {

    launcher.classList.add('faqbot-pulse');

    setTimeout(function () {

      launcher.classList.remove('faqbot-pulse');

    }, 6000);

  }



}());



/* <script> (original line 50904) */
if (SCHOOL_PAGE === "home") {
window.admissionImageSchedule = { start: '2026-11-14', end: '2026-11-18' };
}

/* <script> (original line 50924) */
if (SCHOOL_PAGE === "home") {


(function () {

  'use strict';

  /* ── SETTINGS ───────────────────────────────────────────── */

  var APPLY_URL     = 'https://mocc.myclassboard.com/OnlineApplicationForm_New/513FDD72-578A-4369-BEB6-2846A07B26BF';

  var SHOW_AFTER_MS = 1500;



  /* ── GUARDS ─────────────────────────────────────────────── */

  /* Homepage-only initialization is guarded by SCHOOL_PAGE. */



  /* ── ELEMENTS ───────────────────────────────────────────── */

  var backdrop = document.getElementById('admpop-backdrop');

  var card     = document.getElementById('admpop-card');

  var closeBtn = document.getElementById('admpop-close');

  var procBtn  = document.getElementById('admpop-procedure');



  if (!backdrop || !card || !closeBtn || !procBtn) return;



  /* ── FOCUS TRAP ─────────────────────────────────────────── */

  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';



  function trapFocus(e) {

    if (e.key !== 'Tab') return;

    var nodes = Array.prototype.slice.call(card.querySelectorAll(FOCUSABLE));

    if (!nodes.length) return;

    var first = nodes[0], last = nodes[nodes.length - 1];

    if (e.shiftKey) {

      if (document.activeElement === first) { e.preventDefault(); last.focus(); }

    } else {

      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }

    }

  }



  /* ── OPEN ───────────────────────────────────────────────── */

  var previousFocus, previousOverflow;
  function fitPopup() {
    if (backdrop.hidden) return;
    card.style.zoom = '1';
    var availableHeight = (window.visualViewport ? window.visualViewport.height : window.innerHeight) - 32;
    card.style.zoom = String(Math.min(1, availableHeight / card.offsetHeight));
  }
  window.addEventListener('resize', fitPopup);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', fitPopup);
  function openPopup() {
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;

    backdrop.hidden = false;
    fitPopup();

    document.body.style.overflow = 'hidden';

    backdrop.addEventListener('keydown', trapFocus);

    requestAnimationFrame(function () {

      requestAnimationFrame(function () {

        backdrop.classList.add('admpop-visible');

      });

    });

    setTimeout(function () { closeBtn.focus(); }, 120);

  }



  /* ── CLOSE ──────────────────────────────────────────────── */

  function closePopup() {

    backdrop.classList.remove('admpop-visible');

    setTimeout(function () {

      backdrop.hidden = true;

      document.body.style.overflow = previousOverflow || '';
      if (previousFocus && previousFocus.isConnected) previousFocus.focus();

      backdrop.removeEventListener('keydown', trapFocus);

    }, 300);


  }



  /* ── EVENTS ─────────────────────────────────────────────── */

  closeBtn.addEventListener('click', closePopup);



  backdrop.addEventListener('click', function (e) {

    if (e.target === backdrop) closePopup();

  });



  document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape' && !backdrop.hidden) closePopup();

  });



  procBtn.addEventListener('click', function () {

    window.location.href = 'admission-process.html';

    closePopup();

  });



  document.getElementById('admpop-tour-form').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.assign(APPLY_URL);
  });
  /* ── AUTO-OPEN ──────────────────────────────────────────── */

  function imagePopupActive() {
    var schedule = window.admissionImageSchedule;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(schedule.start) || !/^\d{4}-\d{2}-\d{2}$/.test(schedule.end)) return false;
    var start = Date.parse(schedule.start + 'T00:00:00+05:30');
    var end = Date.parse(schedule.end + 'T00:00:00+05:30');
    var now = Date.now();
    return Number.isFinite(start) && Number.isFinite(end) && start <= end && now >= start && now < end + 86400000;
  }
  function openImagePopup() {
    var overlay = document.getElementById('admpop-image-backdrop');
    var button = document.getElementById('admpop-image-close');
    var lastFocus = document.activeElement, oldOverflow = document.body.style.overflow;
    var closing = false;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ if(!closing){ overlay.classList.add('admpop-visible'); button.focus(); } }); });
    function closeImage() {
      if (closing) return;
      closing = true;
      overlay.classList.remove('admpop-visible');
      document.removeEventListener('keydown', onKey);
      setTimeout(function(){ overlay.hidden = true; document.body.style.overflow = oldOverflow; if(lastFocus && lastFocus.isConnected) lastFocus.focus(); }, 480);
    }
    function onKey(e) { if(e.key === 'Escape') closeImage(); else if(e.key === 'Tab'){e.preventDefault();button.focus();} }
    button.onclick = closeImage;
    overlay.onclick = function(e){ if(e.target === overlay) closeImage(); };
    document.addEventListener('keydown', onKey);
  }
  setTimeout(function(){ if(imagePopupActive()) openImagePopup(); else openPopup(); }, SHOW_AFTER_MS);



}());


}

/* <script id="mts-achievers-script"> (original line 52105) */
if (SCHOOL_PAGE === "home") {

(function () {
  'use strict';

  /* ==========================================================
     STUDENT PHOTO PATHS
     Update these seven paths to replace the student photographs.
     ========================================================== */
  var PHOTO_PATHS = Object.freeze({
    anvay: 'images/anvay.png',
    shantanu: 'images/shantanu.png',
    namish: 'images/namish.png',
    priya: 'images/priya.png',
    aarohi: 'images/aarohi.png',
    arnav: 'images/arnav.png',
    aarav: 'images/aarav.png'
  });

  /* DATA */
  var ACHIEVERS = [
    { id:'anvay', rank:1, rankLabel:'1st Rank', score:98.6, scoreDisplay:'98.6%', name:'Anvay Aniruddha Ashtekar', initials:'AA', joint:false, photo:PHOTO_PATHS.anvay },
    { id:'shantanu', rank:2, rankLabel:'2nd Rank', score:98.0, scoreDisplay:'98.0%', name:'Shantanu Santosh Shinde', initials:'SS', joint:false, photo:PHOTO_PATHS.shantanu },
    { id:'namish', rank:3, rankLabel:'3rd Rank', score:97.6, scoreDisplay:'97.6%', name:'Namish Mahesh Kamble', initials:'NM', joint:false, photo:PHOTO_PATHS.namish },
    { id:'priya', rank:4, rankLabel:'Joint 4th Rank', score:97.0, scoreDisplay:'97.0%', name:'Priya Kevalaprasad Mourya', initials:'PM', joint:true, photo:PHOTO_PATHS.priya },
    { id:'aarohi', rank:4, rankLabel:'Joint 4th Rank', score:97.0, scoreDisplay:'97.0%', name:'Aarohi Kalpak Sule', initials:'AS', joint:true, photo:PHOTO_PATHS.aarohi },
    { id:'arnav', rank:5, rankLabel:'Joint 5th Rank', score:96.4, scoreDisplay:'96.40%', name:'Arnav Viraj Dessai', initials:'AD', joint:true, photo:PHOTO_PATHS.arnav },
    { id:'aarav', rank:5, rankLabel:'Joint 5th Rank', score:96.4, scoreDisplay:'96.40%', name:'Aarav Amit Dhande', initials:'AD', joint:true, photo:PHOTO_PATHS.aarav }
  ];

  var root = document.getElementById('mts-achievers-root');
  var shell = document.getElementById('mts-drawer-shell');
  var drawer = document.getElementById('mts-achievers-drawer');
  var widget = document.getElementById('mts-achievers-widget');
  var closeButton = document.getElementById('mts-drawer-close');
  var backdrop = document.getElementById('mts-drawer-backdrop');
  var results = document.getElementById('mts-achiever-results');
  var canvas = document.getElementById('mts-sparkle-canvas');
  var canvasContext = canvas.getContext('2d');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var lastFocusedElement = null;
  var drawerOpen = false;
  var sparkleFrame = 0;

  function crownSvg() {
    return [
      '<svg viewBox="0 0 32 32" width="25" height="25" fill="none" aria-hidden="true">',
      '<path d="m4 9 6.5 7L16 7l5.5 9L28 9l-2.5 14h-19L4 9Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
      '<path d="M7 26h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
      '</svg>'
    ].join('');
  }

  function photoMarkup(student) {
    switch (student.id) {
      case 'anvay':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Anvay Aniruddha Ashtekar → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.anvay + '" alt="Photo of Anvay Aniruddha Ashtekar" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'shantanu':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Shantanu Santosh Shinde → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.shantanu + '" alt="Photo of Shantanu Santosh Shinde" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'namish':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Namish Mahesh Kamble → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.namish + '" alt="Photo of Namish Mahesh Kamble" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'priya':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Priya Kevalaprasad Mourya → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.priya + '" alt="Photo of Priya Kevalaprasad Mourya" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'aarohi':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Aarohi Kalpak Sule → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.aarohi + '" alt="Photo of Aarohi Kalpak Sule" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'arnav':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Arnav Viraj Dessai → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.arnav + '" alt="Photo of Arnav Viraj Dessai" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'aarav':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Aarav Amit Dhande → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.aarav + '" alt="Photo of Aarav Amit Dhande" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      default:
        return '';
    }
  }

  function avatarMarkup(student) {
    return [
      '<div class="mts-avatar-wrap"><div class="mts-avatar-inner">',
      '<span class="mts-initials-fallback" aria-hidden="true">', student.initials, '</span>',
      photoMarkup(student),
      '</div></div>'
    ].join('');
  }

  function podiumCardMarkup(student, index) {
    return [
      '<article class="mts-achiever-card mts-podium-card mts-rank-', student.rank,
      '" style="--mts-delay:', index * 80, 'ms" aria-label="', student.rankLabel, ': ', student.name, ', ', student.scoreDisplay, '">',
      '<div class="mts-crown-badge" aria-hidden="true">', crownSvg(), '</div>',
      avatarMarkup(student),
      '<h3 class="mts-student-name">', student.name, '</h3>',
      '<div class="mts-rank-ribbon">', student.rankLabel, '</div>',
      '<div class="mts-progress-wrap" data-mts-progress="', student.score,
      '" data-mts-display="', student.scoreDisplay, '" aria-label="', student.scoreDisplay, '">',
      '<svg class="mts-progress-svg" viewBox="0 0 120 120" aria-hidden="true">',
      '<circle class="mts-progress-track" cx="60" cy="60" r="52"></circle>',
      '<circle class="mts-progress-value" cx="60" cy="60" r="52"></circle>',
      '</svg><span class="mts-progress-number">0%</span></div>',
      '</article>'
    ].join('');
  }

  function jointStudentMarkup(student) {
    return [
      '<div class="mts-joint-student">',
      avatarMarkup(student),
      '<h4 class="mts-student-name">', student.name, '</h4>',
      '<span class="mts-rank-chip">', student.rankLabel, ' · ', student.scoreDisplay, '</span>',
      '</div>'
    ].join('');
  }

  function jointCardMarkup(rank, students, index) {
    var score = students[0].scoreDisplay;
    var label = 'Joint ' + rank + 'th Rank';
    var secondStudent = students.length > 1
      ? '<div class="mts-joint-divider" aria-hidden="true">&amp;</div>' + jointStudentMarkup(students[1])
      : '';

    return [
      '<article class="mts-achiever-card mts-joint-card" style="--mts-delay:', (index + 3) * 80,
      'ms" aria-label="', label, ', ', score, '">',
      '<div class="mts-joint-header"><h3>', label, '</h3><span class="mts-score-badge">', score, '</span></div>',
      '<div class="mts-joint-students">', jointStudentMarkup(students[0]), secondStudent, '</div>',
      '</article>'
    ].join('');
  }

  function emptyStateMarkup() {
    return [
      '<div class="mts-empty-state"><div>',
      '<svg viewBox="0 0 64 64" width="54" height="54" fill="none" aria-hidden="true" style="color:var(--color-secondary)">',
      '<circle cx="28" cy="28" r="17" stroke="currentColor" stroke-width="4"/>',
      '<path d="m41 41 13 13M21 28h14" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
      '</svg><h3>No achievers found</h3><p>Try another name or choose a different filter.</p>',
      '</div></div>'
    ].join('');
  }

  function renderAchievers() {
    var filtered = ACHIEVERS.slice();

    if (!filtered.length) {
      results.innerHTML = emptyStateMarkup();
      return;
    }

    results.innerHTML = '<div class="mts-podium-grid mts-all-students-grid">' +
      filtered.map(podiumCardMarkup).join('') +
      '</div>';
    if (drawerOpen) requestAnimationFrame(animateProgressRings);
  }

  function animateProgressRings() {
    var circumference = 2 * Math.PI * 52;
    root.querySelectorAll('[data-mts-progress]').forEach(function (progress) {
      var score = Number(progress.dataset.mtsProgress);
      var display = progress.dataset.mtsDisplay;
      var ring = progress.querySelector('.mts-progress-value');
      var number = progress.querySelector('.mts-progress-number');
      var targetOffset = circumference * (1 - score / 100);
      var decimalPlaces = display.indexOf('.') >= 0 ? display.split('.')[1].replace('%', '').length : 0;

      ring.style.strokeDasharray = String(circumference);
      ring.style.strokeDashoffset = String(circumference);
      number.textContent = reducedMotion.matches ? display : '0%';
      requestAnimationFrame(function () { ring.style.strokeDashoffset = String(targetOffset); });

      if (reducedMotion.matches) return;

      var duration = 1300;
      var start = performance.now();
      function countFrame(now) {
        var elapsed = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - elapsed, 3);
        number.textContent = (score * eased).toFixed(decimalPlaces) + '%';
        if (elapsed < 1) requestAnimationFrame(countFrame);
        else number.textContent = display;
      }
      requestAnimationFrame(countFrame);
    });
  }

  function resizeCanvas() {
    var rect = drawer.getBoundingClientRect();
    var scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * scale));
    canvas.height = Math.max(1, Math.floor(rect.height * scale));
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    canvasContext.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function launchSparkles() {
    cancelAnimationFrame(sparkleFrame);
    if (reducedMotion.matches) return;
    resizeCanvas();

    var styles = getComputedStyle(root);
    var colors = [
      styles.getPropertyValue('--color-secondary').trim(),
      styles.getPropertyValue('--gold-light').trim(),
      styles.getPropertyValue('--color-cta').trim()
    ];

    var particles = Array.from({ length: 42 }, function (_, index) {
      return {
        x: drawer.clientWidth * (.32 + Math.random() * .55),
        y: 50 + Math.random() * 100,
        vx: (Math.random() - .5) * 4.8,
        vy: -1.5 - Math.random() * 4.8,
        gravity: .08 + Math.random() * .05,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - .5) * .18,
        size: 2.5 + Math.random() * 4,
        alpha: .78 + Math.random() * .22,
        color: colors[index % colors.length]
      };
    });

    var start = performance.now();
    function draw(now) {
      canvasContext.clearRect(0, 0, drawer.clientWidth, drawer.clientHeight);
      particles.forEach(function (particle) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.rotation += particle.spin;
        particle.alpha *= .986;
        canvasContext.save();
        canvasContext.globalAlpha = Math.max(0, particle.alpha);
        canvasContext.translate(particle.x, particle.y);
        canvasContext.rotate(particle.rotation);
        canvasContext.fillStyle = particle.color;
        canvasContext.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 1.7);
        canvasContext.restore();
      });
      if (now - start < 1700) sparkleFrame = requestAnimationFrame(draw);
      else canvasContext.clearRect(0, 0, drawer.clientWidth, drawer.clientHeight);
    }
    sparkleFrame = requestAnimationFrame(draw);
  }

  function focusableElements() {
    return Array.from(drawer.querySelectorAll(
      'button:not([disabled]):not([hidden]),input:not([disabled]),[href],[tabindex]:not([tabindex="-1"])'
    )).filter(function (element) { return element.offsetParent !== null; });
  }

  function trapFocus(event) {
    if (!drawerOpen || event.key !== 'Tab') return;
    var focusable = focusableElements();
    if (!focusable.length) {
      event.preventDefault();
      drawer.focus();
      return;
    }
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openDrawer() {
    if (drawerOpen || root.hidden) return;
    drawerOpen = true;
    lastFocusedElement = document.activeElement;
    document.body.classList.add('mts-achievers-open');
    shell.classList.add('is-open');
    shell.setAttribute('aria-hidden', 'false');
    widget.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(function () {
      closeButton.focus();
      animateProgressRings();
      launchSparkles();
    });
  }

  function closeDrawer(restoreFocus) {
    if (!drawerOpen) return;
    drawerOpen = false;
    shell.classList.remove('is-open');
    shell.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mts-achievers-open');
    widget.setAttribute('aria-expanded', 'false');
    cancelAnimationFrame(sparkleFrame);
    if (restoreFocus !== false && lastFocusedElement && lastFocusedElement.focus) lastFocusedElement.focus();
  }

  widget.addEventListener('click', openDrawer);
  closeButton.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && drawerOpen) {
      closeDrawer();
      return;
    }
    trapFocus(event);
  });

  window.addEventListener('resize', function () {
    if (drawerOpen) resizeCanvas();
  });


  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener('change', function () {
      if (drawerOpen) animateProgressRings();
    });
  }

  renderAchievers();
  root.hidden = false;
}());

}

/* Standalone page navigation uses the original active class. */
function setStandaloneNav() {
  const file = SCHOOL_ROUTES[SCHOOL_PAGE]; if (!file) return;
  document.querySelectorAll(".nav-links, #mobileMenu").forEach(menu => {
    menu.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
    menu.querySelectorAll("a[href]").forEach(link => { if (link.getAttribute("href") !== file) return; link.classList.add("active");
      let parent = link.parentElement; while (parent && parent !== menu) { if (parent.matches("li.dropdown, li.dropdown-submenu, li.has-submenu")) parent.querySelector(":scope > a")?.classList.add("active"); if (parent.matches(".mob-dropdown")) parent.querySelector(".mob-dropdown-toggle")?.classList.add("active"); parent = parent.parentElement; }
    });
  });
}
document.addEventListener("DOMContentLoaded", setStandaloneNav);
