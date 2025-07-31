// Personal Spiritual Journal Module
class SpiritualJournal {
    constructor() {
        this.storageKey = 'spiritual_journal_entries';
        this.entries = this.loadEntries();
    }

    // Load journal entries from localStorage
    loadEntries() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading journal entries:', error);
            return [];
        }
    }

    // Save journal entries to localStorage
    saveEntries() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.entries));
            return true;
        } catch (error) {
            console.error('Error saving journal entries:', error);
            return false;
        }
    }

    // Add a new journal entry
    addEntry(entry) {
        const newEntry = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            ...entry
        };
        
        this.entries.unshift(newEntry); // Add to beginning
        this.saveEntries();
        return newEntry;
    }

    // Get all entries
    getAllEntries() {
        return this.entries;
    }

    // Get entries by date range
    getEntriesByDateRange(startDate, endDate) {
        return this.entries.filter(entry => {
            const entryDate = new Date(entry.timestamp);
            return entryDate >= startDate && entryDate <= endDate;
        });
    }

    // Get entries by sacred source
    getEntriesBySource(source) {
        return this.entries.filter(entry => entry.sacredSource === source);
    }

    // Get entries by mood/emotion
    getEntriesByMood(mood) {
        return this.entries.filter(entry => entry.mood === mood);
    }

    // Delete an entry
    deleteEntry(entryId) {
        this.entries = this.entries.filter(entry => entry.id !== entryId);
        this.saveEntries();
    }

    // Update an entry
    updateEntry(entryId, updates) {
        const index = this.entries.findIndex(entry => entry.id === entryId);
        if (index !== -1) {
            this.entries[index] = { ...this.entries[index], ...updates };
            this.saveEntries();
            return this.entries[index];
        }
        return null;
    }

    // Get journal statistics
    getStats() {
        const totalEntries = this.entries.length;
        const sources = {};
        const moods = {};
        const recentActivity = this.entries.filter(entry => {
            const entryDate = new Date(entry.timestamp);
            const weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);
            return entryDate >= weekAgo;
        }).length;

        this.entries.forEach(entry => {
            sources[entry.sacredSource] = (sources[entry.sacredSource] || 0) + 1;
            if (entry.mood) {
                moods[entry.mood] = (moods[entry.mood] || 0) + 1;
            }
        });

        return {
            totalEntries,
            recentActivity,
            sources,
            moods,
            mostUsedSource: Object.keys(sources).reduce((a, b) => sources[a] > sources[b] ? a : b, null),
            mostCommonMood: Object.keys(moods).reduce((a, b) => moods[a] > moods[b] ? a : b, null)
        };
    }

    // Export journal as JSON
    exportJournal() {
        return JSON.stringify(this.entries, null, 2);
    }

    // Import journal from JSON
    importJournal(jsonData) {
        try {
            const importedEntries = JSON.parse(jsonData);
            if (Array.isArray(importedEntries)) {
                this.entries = importedEntries;
                this.saveEntries();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error importing journal:', error);
            return false;
        }
    }

    // Clear all entries
    clearAllEntries() {
        this.entries = [];
        this.saveEntries();
    }
}

// Export the journal class
export default SpiritualJournal; 