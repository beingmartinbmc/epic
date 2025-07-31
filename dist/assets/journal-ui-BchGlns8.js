class l{constructor(){this.storageKey="spiritual_journal_entries",this.entries=this.loadEntries()}loadEntries(){try{const e=localStorage.getItem(this.storageKey);return e?JSON.parse(e):[]}catch(e){return console.error("Error loading journal entries:",e),[]}}saveEntries(){try{return localStorage.setItem(this.storageKey,JSON.stringify(this.entries)),!0}catch(e){return console.error("Error saving journal entries:",e),!1}}addEntry(e){const t={id:Date.now(),timestamp:new Date().toISOString(),date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString(),...e};return this.entries.unshift(t),this.saveEntries(),t}getAllEntries(){return this.entries}getEntriesByDateRange(e,t){return this.entries.filter(o=>{const n=new Date(o.timestamp);return n>=e&&n<=t})}getEntriesBySource(e){return this.entries.filter(t=>t.sacredSource===e)}getEntriesByMood(e){return this.entries.filter(t=>t.mood===e)}deleteEntry(e){this.entries=this.entries.filter(t=>t.id!==e),this.saveEntries()}updateEntry(e,t){const o=this.entries.findIndex(n=>n.id===e);return o!==-1?(this.entries[o]={...this.entries[o],...t},this.saveEntries(),this.entries[o]):null}getStats(){const e=this.entries.length,t={},o={},n=this.entries.filter(a=>{const s=new Date(a.timestamp),i=new Date;return i.setDate(i.getDate()-7),s>=i}).length;return this.entries.forEach(a=>{t[a.sacredSource]=(t[a.sacredSource]||0)+1,a.mood&&(o[a.mood]=(o[a.mood]||0)+1)}),{totalEntries:e,recentActivity:n,sources:t,moods:o,mostUsedSource:Object.keys(t).reduce((a,s)=>t[a]>t[s]?a:s,null),mostCommonMood:Object.keys(o).reduce((a,s)=>o[a]>o[s]?a:s,null)}}exportJournal(){return JSON.stringify(this.entries,null,2)}importJournal(e){try{const t=JSON.parse(e);return Array.isArray(t)?(this.entries=t,this.saveEntries(),!0):!1}catch(t){return console.error("Error importing journal:",t),!1}}clearAllEntries(){this.entries=[],this.saveEntries()}}class d{constructor(){this.journal=new l,this.currentView="list",this.init()}init(){this.createJournalSection(),this.bindEvents(),this.renderJournalList(),this.updateStats()}createJournalSection(){document.querySelector(".divine-content");const e=document.createElement("div");e.id="journalSection",e.className="journal-section",e.innerHTML=`
            <div class="journal-header">
                <h3><i class="fas fa-book-open"></i> Personal Spiritual Journal</h3>
                <div class="journal-actions">
                    <button id="addJournalBtn" class="journal-btn primary">
                        <i class="fas fa-plus"></i> New Entry
                    </button>
                    <button id="journalStatsBtn" class="journal-btn">
                        <i class="fas fa-chart-bar"></i> Stats
                    </button>
                    <button id="exportJournalBtn" class="journal-btn">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
            </div>
            
            <div id="journalContent" class="journal-content">
                <!-- Journal content will be rendered here -->
            </div>
        `;const t=document.getElementById("guidanceForm");t.parentNode.insertBefore(e,t.nextSibling)}bindEvents(){document.getElementById("addJournalBtn").addEventListener("click",()=>{this.showAddEntryForm()}),document.getElementById("journalStatsBtn").addEventListener("click",()=>{this.showStats()}),document.getElementById("exportJournalBtn").addEventListener("click",()=>{this.exportJournal()}),document.getElementById("journalContent").addEventListener("click",e=>{if(e.target.classList.contains("delete-entry-btn")){const t=parseInt(e.target.dataset.entryId);this.deleteEntry(t)}else if(e.target.classList.contains("edit-entry-btn")){const t=parseInt(e.target.dataset.entryId);this.editEntry(t)}})}showAddEntryForm(){const e=document.getElementById("journalContent");e.innerHTML=`
            <div class="journal-form">
                <h4><i class="fas fa-edit"></i> New Journal Entry</h4>
                <form id="journalEntryForm">
                    <div class="form-group">
                        <label for="journalTitle">Title</label>
                        <input type="text" id="journalTitle" class="form-control" placeholder="What's on your mind today?" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="journalReflection">Personal Reflection</label>
                        <textarea id="journalReflection" class="form-control" rows="4" placeholder="Share your thoughts, feelings, and spiritual insights..." required></textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="journalMood">Current Mood</label>
                            <select id="journalMood" class="form-select">
                                <option value="">Select your mood...</option>
                                <option value="peaceful">😌 Peaceful</option>
                                <option value="grateful">🙏 Grateful</option>
                                <option value="contemplative">🤔 Contemplative</option>
                                <option value="inspired">✨ Inspired</option>
                                <option value="challenged">😔 Challenged</option>
                                <option value="joyful">😊 Joyful</option>
                                <option value="anxious">😰 Anxious</option>
                                <option value="hopeful">🌟 Hopeful</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="journalSource">Sacred Source (Optional)</label>
                            <select id="journalSource" class="form-select">
                                <option value="">Select if inspired by...</option>
                                <option value="Bhagavad Gita">Bhagavad Gita</option>
                                <option value="Vedas">The Vedas</option>
                                <option value="Quran">Holy Quran</option>
                                <option value="Bible">Holy Bible</option>
                                <option value="Guru Granth Sahib">Guru Granth Sahib</option>
                                <option value="Tripitaka">The Tripitaka</option>
                                <option value="Personal">Personal Insight</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="journalGratitude">Gratitude (Optional)</label>
                        <textarea id="journalGratitude" class="form-control" rows="2" placeholder="What are you grateful for today?"></textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="journal-btn primary">
                            <i class="fas fa-save"></i> Save Entry
                        </button>
                        <button type="button" class="journal-btn secondary" onclick="journalUI.showJournalList()">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </form>
            </div>
        `,document.getElementById("journalEntryForm").addEventListener("submit",t=>{t.preventDefault(),this.saveEntry()})}saveEntry(){const e=document.getElementById("journalTitle").value,t=document.getElementById("journalReflection").value,o=document.getElementById("journalMood").value,n=document.getElementById("journalSource").value,a=document.getElementById("journalGratitude").value,s={title:e,reflection:t,mood:o,sacredSource:n,gratitude:a};this.journal.addEntry(s),this.showJournalList(),this.updateStats(),this.showMessage("Journal entry saved successfully! ✨","success")}renderJournalList(){const e=this.journal.getAllEntries(),t=document.getElementById("journalContent");if(e.length===0){t.innerHTML=`
                <div class="empty-journal">
                    <i class="fas fa-book-open"></i>
                    <h4>Your Spiritual Journal is Empty</h4>
                    <p>Start your spiritual journey by adding your first journal entry.</p>
                    <button class="journal-btn primary" onclick="journalUI.showAddEntryForm()">
                        <i class="fas fa-plus"></i> Write Your First Entry
                    </button>
                </div>
            `;return}t.innerHTML=`
            <div class="journal-list">
                <div class="journal-filters">
                    <select id="moodFilter" class="form-select">
                        <option value="">All Moods</option>
                        <option value="peaceful">😌 Peaceful</option>
                        <option value="grateful">🙏 Grateful</option>
                        <option value="contemplative">🤔 Contemplative</option>
                        <option value="inspired">✨ Inspired</option>
                        <option value="challenged">😔 Challenged</option>
                        <option value="joyful">😊 Joyful</option>
                        <option value="anxious">😰 Anxious</option>
                        <option value="hopeful">🌟 Hopeful</option>
                    </select>
                    
                    <select id="sourceFilter" class="form-select">
                        <option value="">All Sources</option>
                        <option value="Bhagavad Gita">Bhagavad Gita</option>
                        <option value="Vedas">The Vedas</option>
                        <option value="Quran">Holy Quran</option>
                        <option value="Bible">Holy Bible</option>
                        <option value="Guru Granth Sahib">Guru Granth Sahib</option>
                        <option value="Tripitaka">The Tripitaka</option>
                        <option value="Personal">Personal Insight</option>
                    </select>
                </div>
                
                <div class="journal-entries">
                    ${e.map(o=>this.renderJournalEntry(o)).join("")}
                </div>
            </div>
        `,document.getElementById("moodFilter").addEventListener("change",()=>this.filterEntries()),document.getElementById("sourceFilter").addEventListener("change",()=>this.filterEntries())}renderJournalEntry(e){const t=this.getMoodEmoji(e.mood),o=this.getSourceIcon(e.sacredSource);return`
            <div class="journal-entry" data-entry-id="${e.id}">
                <div class="entry-header">
                    <div class="entry-meta">
                        <span class="entry-date">${e.date}</span>
                        <span class="entry-time">${e.time}</span>
                        ${e.mood?`<span class="entry-mood">${t} ${e.mood}</span>`:""}
                        ${e.sacredSource?`<span class="entry-source">${o} ${e.sacredSource}</span>`:""}
                    </div>
                    <div class="entry-actions">
                        <button class="edit-entry-btn" data-entry-id="${e.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-entry-btn" data-entry-id="${e.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                
                <div class="entry-content">
                    <h5 class="entry-title">${e.title}</h5>
                    <p class="entry-reflection">${e.reflection}</p>
                    ${e.gratitude?`<div class="entry-gratitude"><strong>Gratitude:</strong> ${e.gratitude}</div>`:""}
                </div>
            </div>
        `}getMoodEmoji(e){return{peaceful:"😌",grateful:"🙏",contemplative:"🤔",inspired:"✨",challenged:"😔",joyful:"😊",anxious:"😰",hopeful:"🌟"}[e]||"📝"}getSourceIcon(e){return{"Bhagavad Gita":"🕉️",Vedas:"📜",Quran:"☪️",Bible:"✝️","Guru Granth Sahib":"☬",Tripitaka:"☸️",Personal:"💭"}[e]||"📖"}filterEntries(){const e=document.getElementById("moodFilter").value,t=document.getElementById("sourceFilter").value;let o=this.journal.getAllEntries();e&&(o=o.filter(n=>n.mood===e)),t&&(o=o.filter(n=>n.sacredSource===t)),this.renderFilteredEntries(o)}renderFilteredEntries(e){const t=document.querySelector(".journal-entries");if(e.length===0){t.innerHTML=`
                <div class="no-entries">
                    <i class="fas fa-search"></i>
                    <p>No entries match your filters.</p>
                </div>
            `;return}t.innerHTML=e.map(o=>this.renderJournalEntry(o)).join("")}deleteEntry(e){confirm("Are you sure you want to delete this journal entry? This action cannot be undone.")&&(this.journal.deleteEntry(e),this.renderJournalList(),this.updateStats(),this.showMessage("Journal entry deleted.","info"))}editEntry(e){const t=this.journal.getAllEntries().find(n=>n.id===e);if(!t)return;const o=document.getElementById("journalContent");o.innerHTML=`
            <div class="journal-form">
                <h4><i class="fas fa-edit"></i> Edit Journal Entry</h4>
                <form id="editJournalForm">
                    <input type="hidden" id="editEntryId" value="${t.id}">
                    
                    <div class="form-group">
                        <label for="editJournalTitle">Title</label>
                        <input type="text" id="editJournalTitle" class="form-control" value="${t.title}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="editJournalReflection">Personal Reflection</label>
                        <textarea id="editJournalReflection" class="form-control" rows="4" required>${t.reflection}</textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="editJournalMood">Current Mood</label>
                            <select id="editJournalMood" class="form-select">
                                <option value="">Select your mood...</option>
                                <option value="peaceful" ${t.mood==="peaceful"?"selected":""}>😌 Peaceful</option>
                                <option value="grateful" ${t.mood==="grateful"?"selected":""}>🙏 Grateful</option>
                                <option value="contemplative" ${t.mood==="contemplative"?"selected":""}>🤔 Contemplative</option>
                                <option value="inspired" ${t.mood==="inspired"?"selected":""}>✨ Inspired</option>
                                <option value="challenged" ${t.mood==="challenged"?"selected":""}>😔 Challenged</option>
                                <option value="joyful" ${t.mood==="joyful"?"selected":""}>😊 Joyful</option>
                                <option value="anxious" ${t.mood==="anxious"?"selected":""}>😰 Anxious</option>
                                <option value="hopeful" ${t.mood==="hopeful"?"selected":""}>🌟 Hopeful</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="editJournalSource">Sacred Source</label>
                            <select id="editJournalSource" class="form-select">
                                <option value="">Select if inspired by...</option>
                                <option value="Bhagavad Gita" ${t.sacredSource==="Bhagavad Gita"?"selected":""}>Bhagavad Gita</option>
                                <option value="Vedas" ${t.sacredSource==="Vedas"?"selected":""}>The Vedas</option>
                                <option value="Quran" ${t.sacredSource==="Quran"?"selected":""}>Holy Quran</option>
                                <option value="Bible" ${t.sacredSource==="Bible"?"selected":""}>Holy Bible</option>
                                <option value="Guru Granth Sahib" ${t.sacredSource==="Guru Granth Sahib"?"selected":""}>Guru Granth Sahib</option>
                                <option value="Tripitaka" ${t.sacredSource==="Tripitaka"?"selected":""}>The Tripitaka</option>
                                <option value="Personal" ${t.sacredSource==="Personal"?"selected":""}>Personal Insight</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="editJournalGratitude">Gratitude</label>
                        <textarea id="editJournalGratitude" class="form-control" rows="2">${t.gratitude||""}</textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="journal-btn primary">
                            <i class="fas fa-save"></i> Update Entry
                        </button>
                        <button type="button" class="journal-btn secondary" onclick="journalUI.showJournalList()">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </form>
            </div>
        `,document.getElementById("editJournalForm").addEventListener("submit",n=>{n.preventDefault(),this.updateEntry()})}updateEntry(){const e=parseInt(document.getElementById("editEntryId").value),t=document.getElementById("editJournalTitle").value,o=document.getElementById("editJournalReflection").value,n=document.getElementById("editJournalMood").value,a=document.getElementById("editJournalSource").value,s=document.getElementById("editJournalGratitude").value,i={title:t,reflection:o,mood:n,sacredSource:a,gratitude:s};this.journal.updateEntry(e,i),this.showJournalList(),this.updateStats(),this.showMessage("Journal entry updated successfully! ✨","success")}showStats(){const e=this.journal.getStats(),t=document.getElementById("journalContent");t.innerHTML=`
            <div class="journal-stats">
                <h4><i class="fas fa-chart-bar"></i> Your Spiritual Journey</h4>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">${e.totalEntries}</div>
                        <div class="stat-label">Total Entries</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">${e.recentActivity}</div>
                        <div class="stat-label">This Week</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">${e.mostUsedSource||"None"}</div>
                        <div class="stat-label">Most Used Source</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">${e.mostCommonMood||"None"}</div>
                        <div class="stat-label">Most Common Mood</div>
                    </div>
                </div>
                
                <div class="stats-details">
                    <div class="stats-section">
                        <h5>Sacred Sources</h5>
                        <div class="source-stats">
                            ${Object.entries(e.sources).map(([o,n])=>`
                                <div class="source-stat">
                                    <span class="source-name">${this.getSourceIcon(o)} ${o}</span>
                                    <span class="source-count">${n}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                    
                    <div class="stats-section">
                        <h5>Mood Patterns</h5>
                        <div class="mood-stats">
                            ${Object.entries(e.moods).map(([o,n])=>`
                                <div class="mood-stat">
                                    <span class="mood-name">${this.getMoodEmoji(o)} ${o}</span>
                                    <span class="mood-count">${n}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </div>
                
                <div class="stats-actions">
                    <button class="journal-btn" onclick="journalUI.showJournalList()">
                        <i class="fas fa-arrow-left"></i> Back to Journal
                    </button>
                </div>
            </div>
        `}exportJournal(){const e=this.journal.exportJournal(),t=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(t),n=document.createElement("a");n.href=o,n.download=`spiritual-journal-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(o),this.showMessage("Journal exported successfully! 📄","success")}showJournalList(){this.currentView="list",this.renderJournalList()}updateStats(){}showMessage(e,t="info"){const o=document.createElement("div");o.className=`journal-message ${t}`,o.innerHTML=`
            <i class="fas fa-${t==="success"?"check-circle":t==="error"?"exclamation-circle":"info-circle"}"></i>
            ${e}
        `,document.body.appendChild(o),setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},3e3)}}export{d as default};
