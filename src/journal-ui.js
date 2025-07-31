// Journal UI Components
import SpiritualJournal from './journal.js';

class JournalUI {
    constructor() {
        this.journal = new SpiritualJournal();
        this.currentView = 'list'; // 'list', 'add', 'stats'
        this.init();
    }

    init() {
        this.createJournalSection();
        this.bindEvents();
        this.renderJournalList();
        this.updateStats();
    }

    createJournalSection() {
        const mainContainer = document.querySelector('.divine-content');
        
        // Create journal section
        const journalSection = document.createElement('div');
        journalSection.id = 'journalSection';
        journalSection.className = 'journal-section';
        journalSection.innerHTML = `
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
        `;

        // Insert after the main form
        const form = document.getElementById('guidanceForm');
        form.parentNode.insertBefore(journalSection, form.nextSibling);
    }

    bindEvents() {
        // Add journal entry button
        document.getElementById('addJournalBtn').addEventListener('click', () => {
            this.showAddEntryForm();
        });

        // Journal stats button
        document.getElementById('journalStatsBtn').addEventListener('click', () => {
            this.showStats();
        });

        // Export journal button
        document.getElementById('exportJournalBtn').addEventListener('click', () => {
            this.exportJournal();
        });

        // Delegate events for journal entries
        document.getElementById('journalContent').addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-entry-btn')) {
                const entryId = parseInt(e.target.dataset.entryId);
                this.deleteEntry(entryId);
            } else if (e.target.classList.contains('edit-entry-btn')) {
                const entryId = parseInt(e.target.dataset.entryId);
                this.editEntry(entryId);
            }
        });
    }

    showAddEntryForm() {
        const content = document.getElementById('journalContent');
        content.innerHTML = `
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
        `;

        // Bind form submission
        document.getElementById('journalEntryForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveEntry();
        });
    }

    saveEntry() {
        const title = document.getElementById('journalTitle').value;
        const reflection = document.getElementById('journalReflection').value;
        const mood = document.getElementById('journalMood').value;
        const source = document.getElementById('journalSource').value;
        const gratitude = document.getElementById('journalGratitude').value;

        const entry = {
            title,
            reflection,
            mood,
            sacredSource: source,
            gratitude
        };

        this.journal.addEntry(entry);
        this.showJournalList();
        this.updateStats();
        
        // Show success message
        this.showMessage('Journal entry saved successfully! ✨', 'success');
    }

    renderJournalList() {
        const entries = this.journal.getAllEntries();
        const content = document.getElementById('journalContent');

        if (entries.length === 0) {
            content.innerHTML = `
                <div class="empty-journal">
                    <i class="fas fa-book-open"></i>
                    <h4>Your Spiritual Journal is Empty</h4>
                    <p>Start your spiritual journey by adding your first journal entry.</p>
                    <button class="journal-btn primary" onclick="journalUI.showAddEntryForm()">
                        <i class="fas fa-plus"></i> Write Your First Entry
                    </button>
                </div>
            `;
            return;
        }

        content.innerHTML = `
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
                    ${entries.map(entry => this.renderJournalEntry(entry)).join('')}
                </div>
            </div>
        `;

        // Bind filter events
        document.getElementById('moodFilter').addEventListener('change', () => this.filterEntries());
        document.getElementById('sourceFilter').addEventListener('change', () => this.filterEntries());
    }

    renderJournalEntry(entry) {
        const moodEmoji = this.getMoodEmoji(entry.mood);
        const sourceIcon = this.getSourceIcon(entry.sacredSource);
        
        return `
            <div class="journal-entry" data-entry-id="${entry.id}">
                <div class="entry-header">
                    <div class="entry-meta">
                        <span class="entry-date">${entry.date}</span>
                        <span class="entry-time">${entry.time}</span>
                        ${entry.mood ? `<span class="entry-mood">${moodEmoji} ${entry.mood}</span>` : ''}
                        ${entry.sacredSource ? `<span class="entry-source">${sourceIcon} ${entry.sacredSource}</span>` : ''}
                    </div>
                    <div class="entry-actions">
                        <button class="edit-entry-btn" data-entry-id="${entry.id}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-entry-btn" data-entry-id="${entry.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                
                <div class="entry-content">
                    <h5 class="entry-title">${entry.title}</h5>
                    <p class="entry-reflection">${entry.reflection}</p>
                    ${entry.gratitude ? `<div class="entry-gratitude"><strong>Gratitude:</strong> ${entry.gratitude}</div>` : ''}
                </div>
            </div>
        `;
    }

    getMoodEmoji(mood) {
        const moodEmojis = {
            'peaceful': '😌',
            'grateful': '🙏',
            'contemplative': '🤔',
            'inspired': '✨',
            'challenged': '😔',
            'joyful': '😊',
            'anxious': '😰',
            'hopeful': '🌟'
        };
        return moodEmojis[mood] || '📝';
    }

    getSourceIcon(source) {
        const sourceIcons = {
            'Bhagavad Gita': '🕉️',
            'Vedas': '📜',
            'Quran': '☪️',
            'Bible': '✝️',
            'Guru Granth Sahib': '☬',
            'Tripitaka': '☸️',
            'Personal': '💭'
        };
        return sourceIcons[source] || '📖';
    }

    filterEntries() {
        const moodFilter = document.getElementById('moodFilter').value;
        const sourceFilter = document.getElementById('sourceFilter').value;
        
        let filteredEntries = this.journal.getAllEntries();
        
        if (moodFilter) {
            filteredEntries = filteredEntries.filter(entry => entry.mood === moodFilter);
        }
        
        if (sourceFilter) {
            filteredEntries = filteredEntries.filter(entry => entry.sacredSource === sourceFilter);
        }
        
        this.renderFilteredEntries(filteredEntries);
    }

    renderFilteredEntries(entries) {
        const entriesContainer = document.querySelector('.journal-entries');
        if (entries.length === 0) {
            entriesContainer.innerHTML = `
                <div class="no-entries">
                    <i class="fas fa-search"></i>
                    <p>No entries match your filters.</p>
                </div>
            `;
            return;
        }
        
        entriesContainer.innerHTML = entries.map(entry => this.renderJournalEntry(entry)).join('');
    }

    deleteEntry(entryId) {
        if (confirm('Are you sure you want to delete this journal entry? This action cannot be undone.')) {
            this.journal.deleteEntry(entryId);
            this.renderJournalList();
            this.updateStats();
            this.showMessage('Journal entry deleted.', 'info');
        }
    }

    editEntry(entryId) {
        const entry = this.journal.getAllEntries().find(e => e.id === entryId);
        if (!entry) return;

        const content = document.getElementById('journalContent');
        content.innerHTML = `
            <div class="journal-form">
                <h4><i class="fas fa-edit"></i> Edit Journal Entry</h4>
                <form id="editJournalForm">
                    <input type="hidden" id="editEntryId" value="${entry.id}">
                    
                    <div class="form-group">
                        <label for="editJournalTitle">Title</label>
                        <input type="text" id="editJournalTitle" class="form-control" value="${entry.title}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="editJournalReflection">Personal Reflection</label>
                        <textarea id="editJournalReflection" class="form-control" rows="4" required>${entry.reflection}</textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="editJournalMood">Current Mood</label>
                            <select id="editJournalMood" class="form-select">
                                <option value="">Select your mood...</option>
                                <option value="peaceful" ${entry.mood === 'peaceful' ? 'selected' : ''}>😌 Peaceful</option>
                                <option value="grateful" ${entry.mood === 'grateful' ? 'selected' : ''}>🙏 Grateful</option>
                                <option value="contemplative" ${entry.mood === 'contemplative' ? 'selected' : ''}>🤔 Contemplative</option>
                                <option value="inspired" ${entry.mood === 'inspired' ? 'selected' : ''}>✨ Inspired</option>
                                <option value="challenged" ${entry.mood === 'challenged' ? 'selected' : ''}>😔 Challenged</option>
                                <option value="joyful" ${entry.mood === 'joyful' ? 'selected' : ''}>😊 Joyful</option>
                                <option value="anxious" ${entry.mood === 'anxious' ? 'selected' : ''}>😰 Anxious</option>
                                <option value="hopeful" ${entry.mood === 'hopeful' ? 'selected' : ''}>🌟 Hopeful</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="editJournalSource">Sacred Source</label>
                            <select id="editJournalSource" class="form-select">
                                <option value="">Select if inspired by...</option>
                                <option value="Bhagavad Gita" ${entry.sacredSource === 'Bhagavad Gita' ? 'selected' : ''}>Bhagavad Gita</option>
                                <option value="Vedas" ${entry.sacredSource === 'Vedas' ? 'selected' : ''}>The Vedas</option>
                                <option value="Quran" ${entry.sacredSource === 'Quran' ? 'selected' : ''}>Holy Quran</option>
                                <option value="Bible" ${entry.sacredSource === 'Bible' ? 'selected' : ''}>Holy Bible</option>
                                <option value="Guru Granth Sahib" ${entry.sacredSource === 'Guru Granth Sahib' ? 'selected' : ''}>Guru Granth Sahib</option>
                                <option value="Tripitaka" ${entry.sacredSource === 'Tripitaka' ? 'selected' : ''}>The Tripitaka</option>
                                <option value="Personal" ${entry.sacredSource === 'Personal' ? 'selected' : ''}>Personal Insight</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="editJournalGratitude">Gratitude</label>
                        <textarea id="editJournalGratitude" class="form-control" rows="2">${entry.gratitude || ''}</textarea>
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
        `;

        // Bind form submission
        document.getElementById('editJournalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateEntry();
        });
    }

    updateEntry() {
        const entryId = parseInt(document.getElementById('editEntryId').value);
        const title = document.getElementById('editJournalTitle').value;
        const reflection = document.getElementById('editJournalReflection').value;
        const mood = document.getElementById('editJournalMood').value;
        const source = document.getElementById('editJournalSource').value;
        const gratitude = document.getElementById('editJournalGratitude').value;

        const updates = {
            title,
            reflection,
            mood,
            sacredSource: source,
            gratitude
        };

        this.journal.updateEntry(entryId, updates);
        this.showJournalList();
        this.updateStats();
        this.showMessage('Journal entry updated successfully! ✨', 'success');
    }

    showStats() {
        const stats = this.journal.getStats();
        const content = document.getElementById('journalContent');
        
        content.innerHTML = `
            <div class="journal-stats">
                <h4><i class="fas fa-chart-bar"></i> Your Spiritual Journey</h4>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">${stats.totalEntries}</div>
                        <div class="stat-label">Total Entries</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">${stats.recentActivity}</div>
                        <div class="stat-label">This Week</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">${stats.mostUsedSource || 'None'}</div>
                        <div class="stat-label">Most Used Source</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">${stats.mostCommonMood || 'None'}</div>
                        <div class="stat-label">Most Common Mood</div>
                    </div>
                </div>
                
                <div class="stats-details">
                    <div class="stats-section">
                        <h5>Sacred Sources</h5>
                        <div class="source-stats">
                            ${Object.entries(stats.sources).map(([source, count]) => `
                                <div class="source-stat">
                                    <span class="source-name">${this.getSourceIcon(source)} ${source}</span>
                                    <span class="source-count">${count}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="stats-section">
                        <h5>Mood Patterns</h5>
                        <div class="mood-stats">
                            ${Object.entries(stats.moods).map(([mood, count]) => `
                                <div class="mood-stat">
                                    <span class="mood-name">${this.getMoodEmoji(mood)} ${mood}</span>
                                    <span class="mood-count">${count}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="stats-actions">
                    <button class="journal-btn" onclick="journalUI.showJournalList()">
                        <i class="fas fa-arrow-left"></i> Back to Journal
                    </button>
                </div>
            </div>
        `;
    }

    exportJournal() {
        const journalData = this.journal.exportJournal();
        const blob = new Blob([journalData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `spiritual-journal-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showMessage('Journal exported successfully! 📄', 'success');
    }

    showJournalList() {
        this.currentView = 'list';
        this.renderJournalList();
    }

    updateStats() {
        // This will be called when entries are added/removed
        // Could update a stats badge or counter if needed
    }

    showMessage(message, type = 'info') {
        // Create a temporary message element
        const messageEl = document.createElement('div');
        messageEl.className = `journal-message ${type}`;
        messageEl.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            ${message}
        `;
        
        document.body.appendChild(messageEl);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 3000);
    }
}

// Export the journal UI class
export default JournalUI; 