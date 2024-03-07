class ProductException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}

class Product {
    constructor(title, description, imageUrl, unit, stock, pricePerUnit, category) {
        this.uuid = generateUUID();
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.unit = unit;
        this.stock = stock;
        this.pricePerUnit = pricePerUnit;
        this.category = category;
    }

    // Getters
    getUuid() {
        return this.uuid;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getUnit() {
        return this.unit;
    }

    getStock() {
        return this.stock;
    }

    getPricePerUnit() {
        return this.pricePerUnit;
    }

    getCategory() {
        return this.category;
    }

    // Setters
    setUuid(uuid) {
        throw new ProductException("Products uuid are auto-generated");
    }

    setTitle(title) {
        if (typeof title !== 'string' || title === null || title.length === 0) {
            throw new ProductException('Empty title');
        }
        this.title = title;
    }

    setDescription(description) {
        if (typeof description !== 'string' || description === null || description === 0) {
            throw new ProductException('Empty description');
        }
        this.description = description;
    }

    setImageUrl(imageUrl) {
        if (typeof imageUrl !== 'string' || imageUrl === null || imageUrl === 0) {
            throw new ProductException('Empty imageUrl');
        }
        this.imageUrl = imageUrl;
    }

    setUnit(unit) {
        if (typeof unit !== 'string' || unit === null || unit === 0) {
            throw new ProductException('Empty unit');
        }
        this.unit = unit;
    }

    setStock(stock) {
        if (typeof stock !== 'number' || stock < 0) {
            throw new ProductException('Stock must be positive');
        }
        this.stock = stock;
    }

    setPricePerUnit(pricePerUnit) {
        if (typeof pricePerUnit !== 'number' || pricePerUnit < 0) {
            throw new ProductException('Price must be positive');
        }
        this.pricePerUnit = pricePerUnit;
    }

    setCategory(category) {
        if (typeof category !== 'string' || category === null || category === 0) {
            throw new ProductException('Empty category');
        }
        this.category = category;
    } 

    static createFromJson(jsonValue) {
        try {
            const parsedObject = JSON.parse(jsonValue);
            return new Product(
                parsedObject.title,
                parsedObject.description,
                parsedObject.imageUrl,
                parsedObject.unit,
                parsedObject.stock,
                parsedObject.pricePerUnit,
                parsedObject.category
            );
        } catch (error) {
            throw new ProductException('Error: ' + error.message);
        }
    }

    static createFromObject(obj) {
        const cleanObj = this.cleanObject(obj);
        return new Product(
            cleanObj.title,
            cleanObj.description,
            cleanObj.imageUrl,
            cleanObj.unit,
            cleanObj.stock,
            cleanObj.pricePerUnit,
            cleanObj.category
        );
    }

    static cleanObject(obj) {
        return {
            title: obj.title,
            description: obj.description,
            imageUrl: obj.imageUrl,
            unit: obj.unit,
            stock: obj.stock,
            pricePerUnit: obj.pricePerUnit,
            category: obj.category
        };
    }


}

