import CustomSelect from "./CostomSelect";
import InputField from "./InputField";

const BillingInformation = ({ formData, setFormData }) => {
  const countries = ["United States", "Canada", "United Kingdom", "Germany", "France"];
  const states = ["California", "New York", "Texas", "Florida", "Illinois"];
  const cities = ["Los Angeles", "New York", "Houston", "Miami", "Chicago"];

  //  const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing Information</h2>
      
      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="User name"
            placeholder="First name"
            value={formData.firstName}
            onChange={(value) => setFormData({...formData, firstName: value})}
            required
          />
          <InputField
            label=""
            placeholder="Last name"
            value={formData.lastName}
            onChange={(value) => setFormData({...formData, lastName: value})}
            required
          />
        </div>

        {/* Company Name */}
        <InputField
          label="Company Name"
          placeholder=""
          value={formData.companyName}
          onChange={(value) => setFormData({...formData, companyName: value})}
        />

        {/* Address */}
        <InputField
          label="Address"
          placeholder=""
          value={formData.address}
          onChange={(value) => setFormData({...formData, address: value})}
          required
        />

        {/* Location Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CustomSelect
            placeholder="Select..."
            options={countries}
            value={formData.country}
            onChange={(value) => setFormData({...formData, country: value})}
          />
          <CustomSelect
            placeholder="Select..."
            options={states}
            value={formData.state}
            onChange={(value) => setFormData({...formData, state: value})}
          />
          <CustomSelect
            placeholder="Select..."
            options={cities}
            value={formData.city}
            onChange={(value) => setFormData({...formData, city: value})}
          />
          <InputField
            label="Zip Code"
            placeholder=""
            value={formData.zipCode}
            onChange={(value) => setFormData({...formData, zipCode: value})}
            required
          />
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Email"
            type="email"
            placeholder=""
            value={formData.email}
            onChange={(value) => setFormData({...formData, email: value})}
            required
          />
          <InputField
            label="Phone Number"
            type="tel"
            placeholder=""
            value={formData.phone}
            onChange={(value) => setFormData({...formData, phone: value})}
            required
          />
        </div>

        {/* Shipping Option */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="differentAddress"
            checked={formData.differentShippingAddress}
            onChange={(e) => setFormData({...formData, differentShippingAddress: e.target.checked})}
            className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
          />
          <label htmlFor="differentAddress" className="text-sm text-gray-700">
            Ship into different address
          </label>
        </div>
      </div>
    </div>
  );
};

export default BillingInformation;