
const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-12">
            <div className="text-center">
              <div className="text-lg text-slate-700 leading-relaxed space-y-8 max-w-4xl mx-auto">
                <p className="text-xl font-medium text-slate-800">
                  We envision a Cambridge that is more than an academic hub—it is the epicenter of 
                  deeptech commercialization, policy influence, and economic transformation.
                </p>
                
                <p>
                  Over the next five years, Cambridge Think Big will serve as a strategic and 
                  operational nucleus to rally academia, government, investors, and entrepreneurs 
                  under one unified banner.
                </p>
                
                <p>
                  Our mission is to leverage Cambridge's intellectual capital and deeptech ecosystem 
                  to inspire a new model for national growth, positioning Britain as the global 
                  leader in innovation and entrepreneurship.
                </p>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Strategic Leadership</h3>
              <p className="text-slate-600">Unifying academia, government, and industry under a shared vision for growth.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Innovation Excellence</h3>
              <p className="text-slate-600">Leveraging deeptech expertise to drive national economic transformation.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Impact</h3>
              <p className="text-slate-600">Positioning Britain as the world's leading innovation and entrepreneurship hub.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
