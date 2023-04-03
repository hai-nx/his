class HisTableColumn {
    constructor(isKey, header, headerClasses, field, width, sortable, display) {
        this.isKey = isKey;
        this.header = header;
        this.headerClasses = headerClasses;
        this.field = field;
        this.width = width;
        this.sortable = sortable;
        this.display = display;
    }
}